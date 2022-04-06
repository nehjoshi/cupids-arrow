const UserModel = require('../models/UserModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/set_gender', async (req, res) => {
    const { gender, email } = req.body;
    console.log(email);
    const User = await mongoose.model('cupids-arrow', UserModel, 'cupids-arrow');

    const user = await User.findOne({email: email});
    user.gender = gender;
    try {
        await user.save();
        console.log("success!");
        return res.json({success: true});
    }
    catch(e) {
        console.log(e);
    }
});
module.exports = router;
