const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"})
mongoose.connect(process.env.DATABASE)
const db = mongoose.connection
db.once('open',() => {
    console.log("DB Connected Successfully!")
})

module.exports = db;