const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function imageValidator(data) {
  let errors = "";

  data.name = !isEmpty(data.name) ? data.name : "";
  data.size = !isEmpty(data.size) ? data.size : "";
  data.url = !isEmpty(data.url) ? data.url : "";

  if (Validator.isEmpty(data.name)) {
    errors = "Name field is required";
  }

  if (Validator.isEmpty(data.size)) {
    errors = "Size field is required";
  }
  if (Validator.isEmpty(data.url)) {
    errors = "Image Url field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
