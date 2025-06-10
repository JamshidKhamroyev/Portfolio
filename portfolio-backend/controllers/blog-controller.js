const blogModel = require("../models/blog-model")
const fs = require("fs");
const path = require("path");

class BlogController {
    async Create(req, res){
        try {
            const image = req.file ? req.file.filename : ""
            const data = req.body
            if(!data){
                return res.status(400).json({ succes: false, message: `Data is not defined` })
            }
            let fulldata = data
            if(image){
                fulldata = {...data, image: image}
            }
            const blog = await blogModel.create(fulldata)
            res.json({ succes: true, message: `Blog created succesfully!`, data: blog})
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
    
            const blog = await blogModel.findById(id);
            if (!blog) {
                return res.status(404).json({ succes: false, message: "Blog not found" });
            }
    
            if (blog.image) {
                const imagePath = path.join(__dirname, "..", "blogs", blog.image);
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.warn("Rasmni o‘chirishda xatolik:", err.message);
                    } else {
                        console.log("Rasm muvaffaqiyatli o‘chirildi:", blog.image);
                    }
                });
            }
    
            await blogModel.findByIdAndDelete(id);
            res.json({ succes: true, message: "Blog and its image deleted successfully!" });
    
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message });
        }
    }

    async GetAll(req, res){
        try {
            const { limit } = req.params
            const blogs = await blogModel.find().sort({ createdAt: -1 }).limit(Number(limit));
            res.json({ succes: true, message: `Blog getting succesfully!`, data: blogs})
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message })
        }
    }
}

module.exports = new BlogController()