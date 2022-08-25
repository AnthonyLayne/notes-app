const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
//const pool = require("./data/db-config");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
