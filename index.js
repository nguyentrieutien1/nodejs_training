const express = require("express");
const cors = require("cors");
const teacher_router = require("./routers/teacher_router");
const subject_router = require("./routers/subject_router");
const student_router = require("./routers/student_router");
const classscheduling_router = require("./routers/classscheduling_router");
const auth_router = require("./routers/auth");
const class_router = require("./routers/class_router");

const app = express();
app.use(express.json());
app.use(cors());

// TEACHER
app.use("/teacher", teacher_router);
app.use("/class", class_router);
// SUBJECT
app.use("/subject", subject_router);
// STUDENT
app.use("/student", student_router);
// CLASS SCHEDULING
app.use("/class_scheduling", classscheduling_router);
app.use("/auth", auth_router);

app.listen(5000, () => {
  console.log("Server is running");
});
