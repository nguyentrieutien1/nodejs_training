const db = require("../models");

// Create
async function create_subject(req, res) {
  try {
    const NewSubject = req.body;
    const subject = await db.Subject.create(NewSubject);
    return res.status(201).json({ subject });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Read
async function get_subject(req, res) {
  try {
    const subjects = await db.Subject.findAll();
    return res.status(200).json({ subjects });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Update
async function update_subject(req, res) {
  try {
    const id = req.params.id;
    const NewSubject = req.body;
    const subject = await db.Subject.update(NewSubject, {
      where: {
        id,
      },
    });
    return res.status(200).json({ subject });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// Delete
async function delete_subject(req, res) {
  try {
    const id = req.params.id;
    const subject = await db.Subject.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ subject });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  create_subject,
  get_subject,
  update_subject,
  delete_subject,
};
