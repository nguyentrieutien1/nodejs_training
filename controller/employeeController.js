const db = require("../models")

async function create_employee(req,res) {
    try {
        const {employee_name} = req.body
        const newEmployee = await db.Employee.create({employee_name})
        return res.status(201).json(newEmployee)
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function get_employee(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function update_employee(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function delete_employee(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    create_employee,
    get_employee,
    update_employee,
    delete_employee
}