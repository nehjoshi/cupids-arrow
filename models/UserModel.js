const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false
    }
}, {timestamps: true, collection: 'cupids-arrow'});
module.exports = schema;
