const express = require('express');
const app =  express();
const path = require('path')
const port = process.env.PORT || 5500;
// const path = require('path');
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , './public/home.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname , './public/about.html'))
})
app.get('/resume',(req,res)=>{
    res.sendFile(path.join(__dirname , './public/resume.html'))
})
app.get('/resume-sample',(req,res)=>{
    res.sendFile(path.join(__dirname , './public/resume-sample.html'))
})
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}...`);
});