const User = require("./models/User");
const Gallery = require("./models/Gallery");

module.exports = function(req, res, next) {
  req.db = {
    User: User,
    Gallery: Gallery
  };

  next();
};
