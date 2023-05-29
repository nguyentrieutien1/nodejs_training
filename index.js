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
app.listen(5000, () => {
  console.log("Server is running");
});

// CLASS
app.use("/class", class_router);
// TEACHER
app.use("/teacher", teacher_router);
// SUBJECT
app.use("/subject", subject_router);
// STUDENT
app.use("/student", student_router);
// CLASS SCHEDULING
app.use("/class_scheduling", classscheduling_router);


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
