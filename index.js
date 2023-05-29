const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
app.use(express.json());
app.use(cors());

// CLASS
// Create
app.post("/class", async (req, res) => {
  try {
    const class_name = req.body;
    const Class = await db.Class.create(class_name);
    return res.status(201).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
});
// Read
app.get("/class", async (req, res) => {
  try {
    const Class = await db.Class.findAll();
    return res.status(200).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
});

app.get("/class/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Class = await db.Class.findOne({
      include: [
        {
          model: db.Class_scheduling,
          include: [
            {
              model: db.Teacher,
              include: [
                {
                  model: db.Subject,
                },
              ],
            },
          ],
        },
        {
          model: db.Student,
        },
      ],
      where: {
        id,
      },
    });
    return res.status(200).json({ Class });
  } catch (error) {
    return res.status(5000).json({ error });
  }
});
// Update
app.put("/class/:id", async (req, res) => {
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
});
// Delete
app.delete("/class/:id", async (req, res) => {
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
});

// TEACHER
// Create
app.post("/teacher", async (req, res) => {
  try {
    const NewTeacher = req.body;
    const teacher = await db.Teacher.create(NewTeacher);
    return res.status(201).json({ teacher });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Read
app.get("/teacher", async (req, res) => {
  try {
    const teachers = await db.Teacher.findAll();
    return res.status(200).json({ teachers });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Update
app.put("/teacher/:id", async (req, res) => {
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
});
// Delete
app.delete("/teacher/:id", async (req, res) => {
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
});

// SUBJECT
// Create
app.post("/subject", async (req, res) => {
  try {
    const NewSubject = req.body;
    const subject = await db.Subject.create(NewSubject);
    return res.status(201).json({ subject });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Read
app.get("/subject", async (req, res) => {
  try {
    const subjects = await db.Subject.findAll();
    return res.status(200).json({ subjects });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Update
app.put("/subject/:id", async (req, res) => {
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
});
// Delete
app.delete("/subject/:id", async (req, res) => {
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
});

// STUDENT
// Create
app.post("/student", async (req, res) => {
  try {
    const NewStudent = req.body;
    const student = await db.Student.create(NewStudent);
    return res.status(201).json({ student });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Read
app.get("/student", async (req, res) => {
  try {
    const students = await db.Student.findAll();
    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Update
app.put("/student/:id", async (req, res) => {
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
});
// Delete
app.delete("/student/:id", async (req, res) => {
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
});

// CLASS SCHEDULING
// Create
app.post("/class_scheduling", async (req, res) => {
  try {
    const NewClassScheduling = req.body;
    const class_scheduling = await db.Class_scheduling.create(
      NewClassScheduling
    );
    return res.status(201).json({ class_scheduling });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Read
app.get("/class_scheduling", async (req, res) => {
  try {
    const class_schedulings = await db.Class_scheduling.findAll();
    return res.status(200).json({ class_schedulings });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// Update
app.put("/class_scheduling/:id", async (req, res) => {
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
});

// Delete
app.delete("/class_scheduling/:id", async (req, res) => {
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
});

// Class_scheduling -> TEACHER -> SUBJECT
app.get("/classes", async (req, res) => {
  try {
    const classes = await db.Class_scheduling.findAll({
      include: [
        {
          model: db.Teacher,
          include: [
            {
              model: db.Subject,
            },
          ],
        },
      ],
    });
    return res.status(200).json({ classes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
