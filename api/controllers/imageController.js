const { getAllImagesServiceFunc } = require("@services/imageService");
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
    return await getAllImagesServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
