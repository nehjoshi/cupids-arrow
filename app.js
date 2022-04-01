const server = require("express");
const app = server();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors())

app.get("/", (req, res) => {
    return res.json({
        message: "Hello world"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})