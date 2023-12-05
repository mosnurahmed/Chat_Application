const express = require("express");
const jsonServer = require("json-server");
const app = express();

// Your other Express middleware and routes go here...

// Use JSON Server middleware to handle API requests
app.use("/api", jsonServer.router("test.json"));

app.get("/user", (req, res) => {
  console.log(res.body);
});

// Start your Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
