const http = require("http");
const app = require("./app");
const PORT = 4000;
const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});

