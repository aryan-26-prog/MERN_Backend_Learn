const fs = require('fs');
const { body, object } = require("framer-motion/client");

const sumRequestHandler = (req, res) => {
  console.log("1. In Sum Request Handler", req.url);
  
  //chunks of data
  const body = [];
  let result;
  req.on('data', chunk => {
    console.log(chunk);
    body.push(chunk);
    console.log("Chunk Came");
  });

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);

    //Parsing Requests to URLSearchParams
    const params = new URLSearchParams(bodyStr);
    const bodyobj = Object.fromEntries(params);
    const result = Number(bodyobj.first) + Number(bodyobj.second);
    console.log(result);

    fs.writeFileSync('calc.txt', JSON.stringify(bodyobj));
  });
  res.setHeader('Content-type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set</title></head>
      <body>
        <h1>Your sum is ${result}</h1>
      </body>
    </html>
  `);
  return res.end();
}

exports.sumRequestHandler = sumRequestHandler;