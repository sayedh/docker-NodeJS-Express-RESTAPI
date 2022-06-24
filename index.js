const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000')
});

app.get('/foo', function (req, res) {
    res.json({"foo": "bar"})
});

// Now we are going to do a POST
app.use(express.urlencoded({
    extended: true
}))

app.post('/bar', function(req, res){
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo)
});