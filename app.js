const express = require("express")
const path = require("path")
const logger = require("morgan")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
dotenv.config()

const indexRoutes = require("./routes/index")

const app = express()

//Views
app.set("views", path.join(__dirname, ("views")))
app.set("view engine", "views")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))



app.use(indexRoutes)


app.listen(3000)