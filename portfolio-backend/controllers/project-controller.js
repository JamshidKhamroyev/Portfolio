const projectModel = require("../models/project-model")
const fs = require("fs");
const path = require("path");

class ProjectController {
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
            const blog = await projectModel.create(fulldata)
            res.json({ succes: true, message: `Project created succesfully!`, data: blog})
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
    
            const project = await projectModel.findById(id);
            if (!project) {
                return res.status(404).json({ succes: false, message: "Blog not found" });
            }
    
            if (project.image) {
                const imagePath = path.join(__dirname, "..", "projects", project.image);
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.warn("Rasmni o‘chirishda xatolik:", err.message);
                    } else {
                        console.log("Rasm muvaffaqiyatli o‘chirildi:", project.image);
                    }
                });
            }
    
            await projectModel.findByIdAndDelete(id);
            res.json({ succes: true, message: "Blog and its image deleted successfully!" });
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message });
        }
    }

    async GetAll(req, res){
        try {
            const { limit } = req.params
            const blogs = await projectModel.find().sort({ createdAt: -1 }).limit(Number(limit));
            res.json({ succes: true, message: `Project getting succesfully!`, data: blogs})
        } catch (error) {
            res.status(400).json({ succes: false, message: error.message })
        }
    }
}

module.exports = new ProjectController()