const path=require('path')
const express=require('express')
//const { send } = require('process')
const hbs=require('hbs')
const url=require('./utils/url') 


console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app=express()

//define path for Express config
const publicdirpath=path.join(__dirname,'../public')
const publicdirpath1=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

//setup handlebar engine and views location 
app.set('view engine', 'hbs')
hbs.registerPartials(partialspath)  

//Setup static directories to serve
app.use(express.static(publicdirpath))

//render different page
app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error:"Please provide a address!"
        })
    } 
    

    url(req.query.address,(error,{body}={})=>{
        
        if(error)
        {
            return res.send({error})
        }
    
    
        res.send({
            
            latitude:body.coord.lon,
            temperature:body.main.temp,
            location:req.query.address ,
            country:body.sys.country 
            
        })
    

    })
})
app.get('',(req,res)=>{
    
    //res.send({address:req.query.address})
    res.render(publicdirpath1+'/index.hbs',{title:'Weather app',name:'Parth'})
})

app.get('/about',(req,res)=>{
    res.render(publicdirpath1+'/about.hbs',{title:'about page'})

})

app.get('/help',(req,res)=>{
    res.render(publicdirpath1+'/help.hbs',{title:'help page'})
})


app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:"you must provide search"
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    }) 
})
app.get('/help/*',(req,res)=>{
    res.render(publicdirpath1+'/404.hbs',{error:'help page not'})
})
app.get('*',(req,res)=>{
    res.render(publicdirpath1+'/404.hbs',{error:'404 page'})
})
//use to run express server
app.listen(3000,()=>{
    console.log('Server is run on port 3000')
})










//use to render html pages for information 
// app.get('',(req,res)=>{
//     res.send('<h1>Weather</h1>')
// })



//app.com
//app.com/help
//app.com/about