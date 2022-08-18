const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const mineral = require('./routes/api/mineral');

app.use("/api/mineral", mineral);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server online at: localhost:${port}`))