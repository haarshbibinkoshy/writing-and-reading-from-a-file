const http = require('http');
const fs = require('fs');

const server=http.createServer((req, res) => {
    const url=req.url
    const method = req.method
    if (url===`/`) {
        res.write(`<html>`)
        res.write(`<head><title>enter Message</title></head>`)
        res.write(`<body><form method="post" action="/message"><input type="text" name="message"><button type="submit" >submit</button></form></body>`)
        return res.end()
    }
    
    else if (url===`/message`&&method==`POST`){
        fs.writeFileSync(`message.txt`,`DUMMY`)
        res.statusCode=302
        res.setHeader(`Location`,`/`)
      return  res.end()
    }

})
server.listen(3000)