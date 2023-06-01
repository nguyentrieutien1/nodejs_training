const db = require("./../models/index");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const { username, password, role_id } = req.body;
    const account = await db.Account.findOne({ where: { username } });
    if (account) {
      return res.json({ message: "Tài khoản đã tồn tại trong hệ thống !" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      await db.Account.create({ username, password: hashPassword, role_id });
      return res.status(201).json({ message: "Tạo tài khoản thành công !" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const account = await db.Account.findOne({ where: { username } });
    if (!account) {
      return res.status(404).json({ message: "Username không chính xác" });
    }
    const isCheckPassword = await bcrypt.compare(password, account.password);
    if (!isCheckPassword) {
      return res
        .status(500)
        .json({ message: "Mật khẩu không chính xác, vui lòng nhập lại !" });
    }
    var token = jwt.sign({ id: account.id }, "login", {
      expiresIn: "2000s",
    });
    return res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  register,
  login,
};
