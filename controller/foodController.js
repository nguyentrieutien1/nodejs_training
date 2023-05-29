const db = require("../models");

async function create_food(req, res) {
  try {
    const { food_type } = req.body;
    const newFood = await db.Food.create({ food_type });
    return res.status(201).json(newFood);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function get_food(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function update_food(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function delete_food(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  create_food,
  get_food,
  update_food,
  delete_food,
};
