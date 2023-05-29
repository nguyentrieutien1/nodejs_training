const db = require("../models");

async function create_classsche(req, res) {
  try {
    const NewClassScheduling = req.body;
    const class_scheduling = await db.Class_scheduling.create(
      NewClassScheduling
    );
    return res.status(201).json({ class_scheduling });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function get_classsche(req, res) {
  try {
    const class_schedulings = await db.Class_scheduling.findAll();
    return res.status(200).json({ class_schedulings });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function update_classsche(req, res) {
  try {
    const id = req.params.id;
    const NewClassScheduling = req.body;
    const student = await db.Class_scheduling.update(NewClassScheduling, {
      where: {
        id,
      },
    });
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function delete_classsche(req, res) {
  try {
    const id = req.params.id;
    const class_scheduling = await db.Class_scheduling.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ class_scheduling });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
    create_classsche,
    get_classsche,
    update_classsche,
    delete_classsche
}