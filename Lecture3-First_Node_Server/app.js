//Creating first node server with Basic syntax
// const http = require('http');  //use http module for rea and res

// function requestListener(req, res) {  // creating function
//   console.log(req);
// }

// http.createServer(requestListener)  //CreateServer = used to creating server


//creating node server with modern syntax
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on adress http://localhost:${PORT}`);
});

//process.exit() = used to exit form the event loop

