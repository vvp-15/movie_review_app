const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.get('/',(req,res) => {
 res.send('index')
})

app.listen(port ,() => {
    console.log("server is up at port..")
}) 