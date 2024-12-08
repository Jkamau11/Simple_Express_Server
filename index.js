// import the express library
const express = require('express');

//instantiating the express library
const app = express();
// defining a port number ==exact location of our resources
const PORT = 8888;

// defining the host address/server address/web address.
const hostName = "127.0.0.1"

/*
    To serve the CSS file along with your HTML, you need to explicitly tell Express to serve static files (like CSS, images, and JavaScript).
    Express doesn't serve static files by default, so you have to use express.static().
    Assuming both your index.html and styles.css are in the same directory (/UserData), you need to serve this directory as static content.
 */
app.use(express.static('./UserData'));

//using instance of express called "app" to get requests from the browser/client and return a response. message : "Hello James"
app.get('/', (req, res)=>{
    res.send("Hello James");
})

//using instance of express called "app" to get requests from the browser/client and return a response. html form
app.get("/form", (req, res)=>res.sendFile(__dirname + '/UserData/index.html'));

//telling the server which port to listen to and print a message on console. "server running ..."
app.listen( PORT, hostName, (req, res)=>{
    console.log('Server started ...')
    console.log(`server running on ${hostName} : ${PORT}`);
})