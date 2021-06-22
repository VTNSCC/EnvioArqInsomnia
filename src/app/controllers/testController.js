const express = require('express');


const routes = require("express").Router();
const multer = require('multer');
const multerConfig = require('../../config/multer');

routes.post("/posts", multer(multerConfig).single('file'), (req, res) =>{
console.log(req.file);

   try{
       console.log(__dirname)
    return res.json( {hello: 'Rocket'});
    
   }catch(erro){
       return res.send(erro);
   }
})   

module.exports = app => app.use("/", routes);