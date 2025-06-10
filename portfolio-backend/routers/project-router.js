const router = require("express").Router()
const ProjectController = require("../controllers/project-controller")
const authMidlewere = require("../midlleweres/auth-midllewere")
const upload = require("../midlleweres/project-image")

router.post("/create", authMidlewere, upload.single("image"), ProjectController.Create)
router.delete("/delete/:id", authMidlewere, ProjectController.Delete)
router.get("/get-all/:limit", ProjectController.GetAll)

module.exports = router