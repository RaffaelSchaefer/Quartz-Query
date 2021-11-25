const express = require("express")();
const PORT: number = 8080;

express.listen(
  PORT,
  () => console.log(`Its alive on http://localhost:${PORT}`)
);