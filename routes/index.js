const express = require("express")
const router = express()
const cookieParser = require("cookie-parser")
router.use(cookieParser())
var modo ="hola"

router.get("/", (req,res) =>{
    var modo = req.cookies.modo || "white"
    if(req.cookies.modo == undefined){
        console.log("undefined")
    }
    res.render("index.ejs", {modo: modo})
})

router.get("/change", (req,res) =>{
    if (req.cookies.modo == "black"){
        res.cookie("modo", "white")
    }else{
        res.cookie("modo", "black")
    }
    res.redirect("/")
})

router.get("/black", (req,res) =>{
    res.render("index.ejs", {modo: modo})
})

router.get("/white", (req,res) =>{
    res.render("index.ejs", {modo: modo})
})

module.exports = router
