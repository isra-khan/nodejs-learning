// Load Node.js modules: http creates the web server, and fs works with files.
const http=require('http');
const fs=require('fs');

// createServer runs this callback for every incoming HTTP request.
// req contains request details; res is used to build and send the response.
const server=http.createServer((req,res)=>{
    // Log details about the request in the terminal for learning/debugging.
    console.log("url",req.url);
    console.log("headers",req.headers);
    console.log("methods",req.method);

   // Show the form when the browser requests the home page.
   if (req.url == '/') {
  // Tell the browser that the response body contains HTML.
  res.setHeader('Content-Type', 'text/html');
  // Build the HTML response by writing its parts to the response.
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  // Submitting this form sends a POST request to /message.
  res.write('<body><form action="/message" method="POST">');
  res.write('<input type="text" name="message">');
  res.write('<button type="submit">SEND</button>');
  res.write('</form></body></html>');
  // end() finishes the response; return prevents the fallback response below.
  return res.end();
}

// Handle the form submission sent to /message.
if (req.url=='/message' && req.method=='POST'){
    // Write a file synchronously. This currently saves "dummy", not form input.
    fs.writeFileSync('message.txt',"dummy");
    // Send a redirect response so the browser returns to the home page.
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();

}


    // Send a simple HTML response for any request not handled above.
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello from my node js server</h1></body>");
    res.write("</html>");
    // Finish sending this response.
    res.end();
});

// Start listening for HTTP requests on port 3000.
server.listen(3000);