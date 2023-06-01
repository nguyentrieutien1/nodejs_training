const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(500).json({
        messgae: "unauthorization",
      });
    }
    const verify = jwt.verify(token, "login");
    if (verify) {
      return next();
    }
  } catch (error) {
    res.status(500).json({
        message: "Phiên đăng nhập đã hết hạn"
    })
  }
};

module.exports = {
  authentication,
};
