const db = require("../models");

async function create_schedule(req,res) {
    try {
        const info = req.body;
        const newInfo = await db.Schedule.create(info);
        return res.status(201).json(newInfo);
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function get_schedule(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function update_schedule(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function delete_schedule(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    create_schedule,
    get_schedule,
    update_schedule,
    delete_schedule
}