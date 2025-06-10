const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const path = require("path")
const { default: helmet } = require("helmet")
const { default: rateLimit } = require("express-rate-limit")

const BlogRouter = require("./routers/blog-router") 
const ProjectRouter = require("./routers/project-router")

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 8,
    message: {
        success: false,
        message: "Juda ko‘p so‘rov yuborildi. Iltimos, keyinroq urinib ko‘ring."
    },
    standardHeaders: true,
    legacyHeaders: false 
});

app.use(limiter)
app.use(helmet())
app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ extended: true }))
// Routers
app.use("/api/blogs", BlogRouter)
app.use("/api/project", ProjectRouter)
app.use("/api/blog-images", express.static(path.join(__dirname, "blogs/")))
app.use("/api/projects-images", express.static(path.join(__dirname, "projects/")))

const startApp = async () => {
    try {
        if(mongoose.connection.readyState !== 1){
            await mongoose.connect(process.env.MONGO_URL, { dbName: "Portfolio" }).then(() => console.log("Db connect succesfully"))    
        }else {
            console.log("Connect to exist database");
        }
        app.listen(process.env.PORT, () => console.log(`Server running on localhost:${process.env.PORT}`))
    } catch (error) {
        return error
    }
}

startApp()