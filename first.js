const fs = require('fs');

fs.writeFile("output.txt", "Writing File", (err) => {
  if (err){
    console.log("Error Occured",err);
  }
  else{
    console.log("File Written successfully");
  }
});


//DNS = Domain Name service 
//types of dns = Root dns(direct queries to the correct tld server), TLD(Top level domain and it directs queries to authoritive dns server), Authoritive Domain(Answers dns queries with the information).
//domain name entry = user types a domain(e.g. www.example.com) into the browser.
//dns query = the browser send a dns query to resolve the domain into an ip address
//dns server = provides the correct ip address for domain
//browser connects = the browser uses the IP connect to web server and loads the website.

//Node core modules
//.fs(file system): handles file operations like reading and writing files
//.http: Creates http server and makes http server.
//.http: Launch a SSL server
//.path: provides utilities handling and transfering file
//.path.os: provides operating system-related utility methods and properties
//.events: handles events nd event driven programming
//.crypto: provides cryptographic functionalities like hashing and encryption
//.url: Parses and formats URL settings


//require keyword = imports modules in node.js
//syntax: const modul_name = require('module')