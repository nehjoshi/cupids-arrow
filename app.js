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

app.use("/", Register);

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})