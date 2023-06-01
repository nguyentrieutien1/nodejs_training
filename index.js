const express = require("express");
const cors = require("cors");
const db = require("./models");
const class_router = require("./routers/class_router");
const teacher_router = require("./routers/teacher_router");
const subject_router = require("./routers/subject_router");
const student_router = require("./routers/student_router");
const classscheduling_router = require("./routers/classscheduling_router");

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
app.use("/teacher", teacher_router);
// SUBJECT
app.use("/subject", subject_router);
// STUDENT
app.use("/student", student_router);
// CLASS SCHEDULING
app.use("/class_scheduling", classscheduling_router);

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
// // Class_scheduling -> TEACHER -> SUBJECT
// app.get("/classes", async (req, res) => {
//   try {
//     const classes = await db.Class_scheduling.findAll({
//       include: [
//         {
//           model: db.Teacher,
//           include: [
//             {
//               model: db.Subject,
//             },
//           ],
//         },
//       ],
//     });
//     return res.status(200).json({ classes });
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// });
