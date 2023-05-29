const db = require("../models");

// Create
async function create_student(req, res) {
  try {
    const NewStudent = req.body;
    const student = await db.Student.create(NewStudent);
    return res.status(201).json({ student });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Read
async function get_student(req, res) {
  try {
    const students = await db.Student.findAll();
    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Update
async function update_student(req, res) {
  try {
    const id = req.params.id;
    const NewStudent = req.body;
    const student = await db.Student.update(NewStudent, {
      where: {
        id,
      },
    });
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Delete
async function delete_student(req, res) {
  try {
    const id = req.params.id;
    const student = await db.Student.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  create_student,
  get_student,
  update_student,
  delete_student,
};
