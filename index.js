
const express = require("express");
const cors = require("cors");

const petRoute = require('./routes/petRoute');

const app = express();
const port = 3000;

/* Global middlewares */
app.use(cors())
app.use(express.json());

// /* Routes */
app.use('/pets', petRoute);

app.get('/test', (req, res) => {
    res.send('Hello World!')
})


/* Server setup */
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`))
}

