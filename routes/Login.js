const mongoose = require("mongoose");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const User = await mongoose.model('cupids-arrow', UserModel, 'cupids-arrow');
    const emailExists = await User.findOne({email});
    if (!emailExists) return res.status(400).json({msg: "Email does not exist"});
    const isMatch = await bcrypt.compare(password, emailExists.password);
    if (!isMatch) return res.status(400).json({msg: "Incorrect password"});
    const token = await jwt.sign({id: emailExists._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return res.status(200).json({msg: "User logged in", success: true, token});
});
module.exports = router;