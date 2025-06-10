const { default: mongoose, Schema, models, model } = require("mongoose");

const projectSchmea = new Schema({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    demoLink: { type: String },
    githubLink: { type: String }
}, { timestamps: true })

module.exports = models.Project || model("Project", projectSchmea)