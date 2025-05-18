const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hlw developer');
})

app.listen(port, () => {
    console.log(`App is running on Port : ${port}`);
})