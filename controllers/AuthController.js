const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password, role_id } = req.body;
    const account = await db.Account.findOne({
      where: { username },
    });
    if (account) {
      return res.json({
        message: "Tài khoản đã tồn tại trong hệ thống!",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      await db.Account.create({
        username,
        password: hashPassword,
        role_id,
      });
      return res.status(201).json({
        message: "Tạo tài khoản thành công!",
      });
    }
  } catch (error) {
    return res, status(500).json({ error });
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
        .json({ message: "Mật khẩu không chính xác, vui lòng nhập lại!" });
    }
    // key xac thuc -> quen mat khau -> token -> 5p het han
    var token = jwt.sign({ id: account.id }, "login",{
        expiresIn: "20s"
    });
    return res.json({ token });
    console.log(token);
    // LOGIN THÀNH CÔNG TRẢ VỀ TOKEN
  } catch (error) {}
};
module.exports = {
  register,
  login,
};
