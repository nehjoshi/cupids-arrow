const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: "",
    },
    firstName: {
        type: String,
        required: true,
        default: "",
    },
    lastName: {
        type: String,
        required: true,
        default: "",
    },
    dateOfBirth: {
        type: String,
        required: true,
        default: "",
    },
    country: {
        type: String,
        required: true,
        default: "",
    },
    gender: {
        type: String,
        required: false,
        default: "",
    }
}, {timestamps: true, collection: 'cupids-arrow'});
const model = mongoose.model('Users', schema, 'cupids-arrow');
module.exports = model;
