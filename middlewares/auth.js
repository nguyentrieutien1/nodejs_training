const jwt = require("jsonwebtoken");
const db = require("../models/index");
const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(500).json({ message: "unauthorized" });
    }
    const verify = jwt.verify(token, "login");
    if (verify) {
      return next();
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messge: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại !" });
  }
};
const authorizion = (roleList) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(500).json({ message: "unauthorized" });
      }
      const verify = jwt.verify(token, "login");
      if (verify) {
        const id = verify.id;
        const account = await db.Account.findOne({
          include: [
            {
              model: db.Role,
            },
          ],
          where: {
            id,
          },
        });
        const isCheckAuthor = roleList.includes(account.Role.role_name);
        if (!isCheckAuthor) {
          return res.status(403).json({ messgae: "Forbidden resource" });
        } else {
          return next();
        }
      }
    } catch (error) {
      return res.status(500).json({
        messge: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại !",
      });
    }
  };
};

module.exports = {
  authentication,
  authorizion,
};
