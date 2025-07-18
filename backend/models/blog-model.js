const { default: mongoose, Schema, models, model } = require("mongoose");

const blogSchema = new Schema({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    link: { type: String }
}, { timestamps: true })

module.exports = models.Blog || model("Blog", blogSchema)