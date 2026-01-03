//Requests and Response 
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // to get response to the server

  //Routing Requests
  if (req.url === '/') {
    res.setHeader('Content-file', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title><head>');
    res.write('<body><h1>Welcome to home<h1><body>');
    res.write('</html>')
    res.end();
  }else if (req.url === '/products') {
    res.setHeader('Content-file', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title><head>');
    res.write('<body><h1>Checkout our products<h1><body>');
    res.write('</html>')
    res.end();
  }else{
    res.setHeader('Content-file', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title><head>');
    res.write('<body><h1>Like/Share/Subscribe<h1><body>');
    res.write('</html>')
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on the address http://localhost:${PORT}`);
})