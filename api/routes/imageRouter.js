const express = require("express");
const router = express.Router();
const imageController = require("@controllers/imageController"); 

router.get("/", imageController.getAllImagesFunc); //get /image
router.put("/", imageController.addImageFunc); //put /image
router.delete("/", imageController.deleteAllImagesFunc); //delete /image

module.exports = router;

