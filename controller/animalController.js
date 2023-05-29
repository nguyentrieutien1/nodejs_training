const db = require("../models");

async function create_animal(req, res) {
  try {
    const info = req.body;
    const newInfo = await db.Animal.create(info);
    return res.status(201).json(newInfo);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function get_animal(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function update_animal(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function delete_animal(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  create_animal,
  get_animal,
  update_animal,
  delete_animal,
};
