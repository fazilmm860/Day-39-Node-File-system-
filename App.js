const express = require('express');
const dotenv = require('dotenv');

const studentRouter = require('./routes/studentRouter');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.json("WELCOM TO API");
})

app.use('/', studentRouter);

const port = process.env.PORt;
app.listen(port, () => {
    console.log(`Running in Port :${port}`);
})