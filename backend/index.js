const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" }))

const PORT = process.env.PORT || 8080

//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connect to database"))
    .catch((err) => console.log(err))

//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String
})

//model
const userModel = mongoose.model("user",userSchema)

//api

app.get("/", (req, res) => {
    res.send("server is running")
})
app.post("/Signup", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });

        if (result) {
            return res.send({ message: "Email id is already registered" });
        }

        const data = userModel(req.body);
        await data.save();

        res.send({ message: "Successfully signed up" });
    } catch (err) {
        console.error(err);
        // Handle other errors or send an appropriate response
        res.status(500).send({ message: "Internal server error" });
    }
});
app.listen(PORT, () => console.log("server is running at port : " + PORT))