const express = require('express');
require('dotenv').config();

const router = require('./src/routes/bookRoutes')
const memberRouter = require('./src/routes/memberRoutes')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Ok")
})

app.use(router, memberRouter)






const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server on port: ${port}`))