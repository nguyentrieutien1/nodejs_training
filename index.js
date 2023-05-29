const express = require("express");
const cors = require("cors");
const app = express();
const employee_router = require("./router/employee_router");
const khu_router = require("./router/khu_router");
const food_router = require("./router/food_router");
const animal_router = require("./router/animal_router");
const schedule_router = require("./router/schedule_router");
const db = require("./models");

app.use(express.json());
app.use(cors());
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use("/employee", employee_router);
app.use("/khu", khu_router);
app.use("/food", food_router);
app.use("/animal", animal_router);
app.use("/schedule", schedule_router);

app.get("/join", async (req, res) => {
  const schedules = await db.Schedule.findAll({
    include: [
      {
        model: db.Employee,
      },
      {
        model: db.Animal,
        include: [
            {
                model: db.Food
            },
            {
                model: db.Khu
            }
        ]
      }
    ],
  });
  return res.status(200).json(schedules);
});
