const {
  getAllImagesServiceFunc,
  addImageServiceFunc,
  deleteAllImagesServiceFunc
} = require("@services/imageService");
/**
  @private
  @usage get all the images from the database.
**/
exports.getAllImagesFunc = async (req, res) => {
  try {
    return await getAllImagesServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
/**
  @private
  @usage add an image to the database.
**/
exports.addImageFunc = async (req, res) => {
  try {
    return await addImageServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
/**
  @private
  @usage delete all the images from the database.
**/
exports.deleteAllImagesFunc = async (req, res) => {
  try {
    return await deleteAllImagesServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
