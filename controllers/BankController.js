const db = require("./../models/index");
const bank_create_controller = async (req, res) => {
  try {
    const { bank_address, bank_name } = req.body;
    const bank = await db.Bank.create({ bank_address, bank_name });
    return res.status(201).json({ bank });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
module.exports = bank_create_controller;
