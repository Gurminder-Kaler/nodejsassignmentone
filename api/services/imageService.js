const mongoose = require("mongoose");
const Image = require("@models/imageModel");
const messages = require("@constants/messages");
const imageValidator = require("@validations/imageValidator");

// get all images
const getAllImagesServiceFunc = async (req, res) => {
  try {
    Image.find()
      .exec()
      .then((images) => {
        if (images.length == 0) {
          return res.status(404).json({
            success: false,
            status: 404,
            message: messages.FAILURE.NO_IMAGES_FOUND,
          });
        }
        return res.status(200).json({
          success: true,
          status: 200,
          message: messages.SUCCESS.IMAGE.FOUND,
          data: images,
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

// add an image
const addImageServiceFunc = async (req, res) => {
  try {
    const { errors, isValid } = imageValidator(req.body);

    if (!isValid) {
      return res.json({
        status: 404,
        success: false,
        message: errors,
      });
    }
    let obj = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      url: req.body.url,
      size: req.body.size,
    };
    new Image(obj)
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messages.SUCCESS.IMAGE.ADDED,
          data: result,
        });
      })
      .catch((err) => {
        console.log("ERROR 73", err);
        res.json({
          status: 500,
          success: false,
          message: err.message ? err.message.message : "",
        });
      });
  } catch (err) {
    console.log("ERROR 81", err);
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

// delete all the images
const deleteAllImagesServiceFunc = async (req, res) => {
  try {
    // const { errors, isValid } = imageValidator(req.body);

    // if (!isValid) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: errors,
    //   });
    // }
    new Image.deleteMany()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messages.SUCCESS.IMAGE.DELETED,
        });
      })
      .catch((err) => {
        console.log("ERROR 73", err);
        res.json({
          status: 500,
          success: false,
          message: err.message ? err.message.message : "",
        });
      });
  } catch (err) {
    console.log("ERROR 81", err);
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

module.exports = {
  getAllImagesServiceFunc,
  addImageServiceFunc,
  deleteAllImagesServiceFunc,
};
