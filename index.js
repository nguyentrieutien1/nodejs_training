const express = require("express");
const app = express();
const port = 3000;
const db = require("./models/index")

app.use(express.static("public"));
app.use(express.json())
// CRUD
// CREATE
app.post("/bank_create", async (req, res) => {
  try {
    const { bank_address, bank_name } = req.body;
    const bank = await db.Bank.create({ bank_address, bank_name });
    return res.status(201).json({ bank });
  } catch (error) {
    return res.json({error})
  }
})
// READ
app.get('/banks', async (req, res) => {
  try {
    const banks = await db.Bank.findAll();
    return res.status(200).json({ banks });
  } catch (error) {
    return res.status(500).json(error);
  }

})
// UPDATE
app.put("/bank/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const { bank_address, bank_name } = req.body;
    const bank = await db.Bank.update(
      { bank_address, bank_name },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({ bank });
  } catch (error) {
     return res.status(500).json({ error });
  }
})
// DELETE
app.delete("/bank/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const bank = await db.Bank.destroy({ where: { id } });
    return res.status(200).json({ bank });
  } catch (error) {
    return res.status(500).json({ error });
    
  }
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
