
//this is the server for solving leetcode questions

const http = require('http'); 
const port = 9090; 
const fizBuzz = require('./fizbuz'); 
const divide_algo = require('../steps_to_reduce_a_number.js'); 



const main = () => {
    //let x = fizBuzz(6);
    let x = divide_algo(5000); 
    console.log('steps result:', x); 
}; 



const server = http.createServer((req, res) => {
    //write a response here but its not needed now 
});



server.listen(port, (error) => {
    if(error) {
        console.log("Something went wrong", error); 
    }

    else {
        console.log("Server is listening on port", port); 

        //call main here
        
        main(); 
    }
}); 
