const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
var counter = 0;

app.get('/greeting', (req, res) => {
    try {
        let name = req.query.name ? req.query.name : "World";
        res.status(200).json({
            id: ++counter,
            content: "Hello " + name + "!"
        })
    } catch (e) {
        console.log(e);
    }
})

app.listen(8080, (err) => {
    if(!err) {
        console.log('Started listening on 8080');
    }
});