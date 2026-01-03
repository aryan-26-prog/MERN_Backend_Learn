const fs = require('fs');
const { body, object } = require("framer-motion/client");

const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  
  //chunks of data
  const body = [];
  req.on('data', chunk => {
    console.log(chunk);
    body.push(chunk);
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
}

exports.sumRequestHandler = sumRequestHandler;