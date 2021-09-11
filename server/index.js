// This file will us to run our server
import dotenv from "dotenv";
dotenv.config();

const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// This has to g before the listen function
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! ^-^" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
