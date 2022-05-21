const mongoose = require("mongoose");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post('/register', async (req, res) => {
    const { email, name, password } = req.body;
    console.log("Works till here");
    if (!email || !name || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    const User = await mongoose.model('cupids-arrow', UserModel, 'cupids-arrow');
    const emailExists = await User.findOne({ email });
    
    if (emailExists) return res.status(400).json({ msg: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        email,
        name,
        password: hashedPassword,
        gender: ""
    });

    try {
        await newUser.save();
        const token = await jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ msg: "User created", success: true, token });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
module.exports = router;