const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use("/api", express.static(path.join(__dirname, "api")));

app.listen(3002, () => console.log("Server running on port 3002!"));
