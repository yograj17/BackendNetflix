const express = require("express");
const DB = require("./Config/DBconnection");
const router = require("./router/Routing");
const app = express();

DB();

app.use(express.json());
app.use(router);

app.listen("3000", () => {
  console.log("Server Started At 3000");
});
