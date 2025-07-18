const router = require("express").Router()
const blogController = require("../controllers/blog-controller")
const upload = require("../midlleweres/blog-image")
const authMidlewere = require("../midlleweres/auth-midllewere")

router.post("/create", authMidlewere, upload.single("image"), blogController.Create)
router.delete("/delete/:id", authMidlewere, blogController.Delete)
router.get("/get-all/:limit", blogController.GetAll)

module.exports = router