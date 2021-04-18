const fetch = require('node-fetch');
const fs = require('fs');


const url = 'http://jsonplaceholder.typicode.com/posts'


//Fetching data from the API using the node fetch module and writing it using the fs module
fetch(url).then((response) => response.json()).then((result)=>{
    // console.log(result)

    fs.writeFile('./result/posts.json', JSON.stringify(result, null, 4), 'utf8', (err)=>{
        return "Error writing file to posts.json";
    });
})