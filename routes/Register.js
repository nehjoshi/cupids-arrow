const mongoose = require("mongoose");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

router.post('/register', async (req, res) => {
    const { email, name, password } = req.body;
    console.log("Works till here");
    if (!email || !name || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    const User = await mongoose.model('cupids-arrow', UserModel);
    console.log("Works till here");
    // const emailExists = await User.findOne({ email });
    // console.log("Works till heressdsdsd");
    // if (emailExists) return res.status(400).json({ msg: "Email already exists" });
    console.log("Works till here-3");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        email,
        name,
        password: hashedPassword,
    });
    console.log("Works till here");
    try {
        await newUser.save();
        console.log("Success!");
        res.status(201).json({ msg: "User created", success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
module.exports = router;