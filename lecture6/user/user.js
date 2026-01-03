// Parsing Requests
//data is stream of chunks

//DuplexStream = two stream sending and receiving data at the same time 

//Stream = a stream is an abstract interface for handling data flow as a continuous sequence of small, manageable pieces (chunks), rather than loading the entire dataset into memory at once.

// Chunk = It is a small manageable piece of data that is a part of larger data set being processed throug a stream. ( req.on("data"), (chunk)=>{
  //console.log(chunk);
//});

//Buffer = A Buffer in Node.js is a built-in class used to handle and manipulate raw binary data directly in memory

const fs = require('fs'); 

const userRequestHandler = (req, res ) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your Name"><br>');
    res.write('<h2>Enter Gender:</h2>');
    res.write('<label>Male</label>');
    res.write('<input type="radio" name="gender" value="male"/>');
    res.write('<label>Female</label>');
    res.write('<input type="radio" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write("</html>");
    return res.end();
  }else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {  //Redirecting requsts

    //sending chunks
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => { //used when all the chunks are recieved
      const fullbody = Buffer.concat(body).toString();   //concat all the chunk to set complete dataset 
      console.log(fullbody);

      //Parsing Requests
      //The URLSearchParams API in Node.js allows read and write operations on the URL query.
      const params = new URLSearchParams(fullbody);
      const bodyObject = Object.fromEntries(params); //shortcut way of getting key-value using params
      console.log(bodyObject);

      //Blocking code
      fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
        console.log("Data written Successfully");

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
 
  }else{
    res.setHeader('Content-Type', 'text/html');  
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like share comment</h1><body>');
    res.write('</html>');
    return res.end();
  }
};


//using modules
module.exports = userRequestHandler;