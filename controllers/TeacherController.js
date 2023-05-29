const db = require("../models");

async function Create_Teacher(req, res) {
  try {
    const NewTeacher = req.body;
    const teacher = await db.Teacher.create(NewTeacher);
    return res.status(201).json({ teacher });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function Get_Teacher(req, res) {
  try {
    const teachers = await db.Teacher.findAll();
    return res.status(200).json({ teachers });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function Update_Teacher(req, res) {
  try {
    const id = req.params.id;
    const NewTeacher = req.body;
    const teacher = await db.Teacher.update(NewTeacher, {
      where: {
        id,
      },
    });
    return res.status(200).json({ teacher });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function Delete_Teacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await db.Teacher.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ teacher });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  Create_Teacher,
  Get_Teacher,
  Update_Teacher,
  Delete_Teacher,
};
