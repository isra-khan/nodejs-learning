const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("url",req.url);
    console.log("headers",req.headers);
    console.log("methods",req.method);

   
   if (req.url == '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><form action="/message" method="POST">');
  res.write('<input type="text" name="message">');
  res.write('<button type="submit">SEND</button>');
  res.write('</form></body></html>');
  return res.end();
}

if (req.url=='/message' && req.method=='POST'){
    fs.writeFileSync('message.txt',"dummy");
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();

}



    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello from my node js server</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);
//learn how we create a server