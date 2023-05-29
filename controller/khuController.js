const db = require("../models")

async function create_khu(req,res) {
 try {
    const {khu_name} = req.body
    const newKhu = await db.Khu.create({khu_name})
    return res.status(201).json(newKhu)
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function get_khu(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function update_khu(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

async function delete_khu(req,res) {
    try {
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    create_khu,
    get_khu,
    update_khu,
    delete_khu
}