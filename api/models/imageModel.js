const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  timestamps: true,
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Image", imageSchema);
