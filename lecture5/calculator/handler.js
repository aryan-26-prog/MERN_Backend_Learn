const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
      <head><title>Pratice Set</title></head>
      <body>
        <h1>Welcome to Calculator</h1>
        <a href = "/calculator">Go to Calculator</a>
      </body>
      </html>
    `);
    return res.end();

  }else if(req.url.toLowerCase() === "/calculator" ){
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
        <head><title>Pratice Set</title></head>
        <body>
          <h1>Here is the calculator</h1>
          <form action = "/calculate-result" method = "POST">
            <input type="text" placeholder = "first num" name = "first" />
            <input type="text" placeholder = "second num" name = "second" /> 
            <input type="submit" value = "sum">
          <form>
        </body>
      </html>
    `);
    return res.end();

  }else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    sumRequestHandler(req, res);
    return res.end();
  }

  res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
      <head><title>Pratice Set</title></head>
      <body>
        <h1>404 Page</h1>
        <a href = "/">Go to Home</a>
      </body>
      </html>
    `);
    return res.end();
};

exports.requestHandler = requestHandler