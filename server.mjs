// import
import http from "http";

const PORT=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;res.
setHeader("Content-Type","text/plain");

res.end("What is up RTT-43");});

server.listen(PORT,()=>{console.log(`Server running on port ${PORT}!`);});
