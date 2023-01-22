
//this is the server for solving leetcode questions

const http = require('http'); 
const port = 9090; 
const fizBuzz = require('./fizbuz'); 




const main = () => {
    let x = fizBuzz(6);
    console.log('fizbuz result:', x); 
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
