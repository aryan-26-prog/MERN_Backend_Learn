const fs = require('fs'); 
const http = require('http');

const server = http.createServer((req, res ) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your Name"><br>');
    res.write('<h2>Enter Gender:</h2><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="Female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write("</html>");
    return res.end();
  }else if(req.url === "/submit-details" && req.method == "POST"){  //Rediecting requests
    fs.writeFileSync('user.txt', 'Aryan Dhiman');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');  
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1><body>');
  res.write('</html>');
  return res.end();
});

const PORT = (3000);
server.listen(PORT, () => {
  console.log(`Server Running on address http://localhost:${PORT}`);
});