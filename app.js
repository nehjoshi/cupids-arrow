const server = require("express");
const app = server();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(server.json());
const Register = require("./routes/Register");
const Login = require("./routes/Login");
const SetGender = require("./routes/SetGender");

app.use("/", Register);
app.use("/", Login);
app.use("/", SetGender);

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to database");
})
.catch(err => {
    console.log(err);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})