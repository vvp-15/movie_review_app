const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT||3000

const viewPath  = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')
app.set('view engine' , 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname , '/public')))

app.get('/' ,(req,res) =>{
    res.render('index',{
        title : 'Movie Review',
        name : 'vvp'
    })
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title : 'About',
        name :'vvp'
    })
})
app.get('/help',(req,res) =>{
    res.render('help',{
        title :' Help',
        nmae : 'vvp'
    })
})
app.get('*',(req,res)=>{
    res.render('404')
})
app.listen(port,() =>{
    console.log('server is listening at port '+port)
})