const db = require("../models");

// Create
async function Create_Class(req, res) {
  try {
    const class_name = req.body;
    const Class = await db.Class.create(class_name);
    return res.status(201).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
}
// Read
async function Get_Class(req, res) {
  try {
    const Class = await db.Class.findAll();
    return res.status(200).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
}
// Read Class By Id
async function Get_ClassById(req, res) {
  try {
    const {id} = req.params
    const Class = await db.Class.findOne({
      where: {
        id
      },
      include: [
        {
          model: db.Student
        },
        {
          model: db.Class_scheduling,
          include: [
            {
              model: db.Teacher,
              include: [
                {
                  model: db.Subject
                }
              ]
            }
          ]
        }
      ]
    });
    return res.status(200).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
}
// Update
async function Update_Class (req, res) {
    try {
        const id = req.params.id;
        const updateClass = req.body;
        const Class = await db.Class.update(updateClass, {
          where: {
            id: id,
          },
        });
        return res.status(200).json({ Class });
      } catch (error) {
        return res.status(5000).json({ error });
      }
}
// Delete
async function Delete_Class (req, res) {
    try {
        const id = req.params.id;
        const Class = await db.Class.destroy({
          where: {
            id: id,
          },
        });
        return res.status(200).json({ Class });
      } catch (error) {
        return res.status(500).json({ error });
      }
}

module.exports = { Create_Class, Get_Class, Update_Class, Delete_Class, Get_ClassById };
