const http = require('http');
const fs   = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/static'){
    fs.readFile("index.html", (err, found) =>{
      if(err){
        res.writeHead(`404`);
        res.write(`There is something wrong with file`);
        res.end();
      }else {
        res.writeHead(`200`, {'Content-Type': 'Text/html'});
        res.write(found);
        res.end();
      }
    });
  }else{
    res.write(`Please enter a valid route`);
  }
});

server.listen(2018, () => {
  console.log(`Server is started`);
})
