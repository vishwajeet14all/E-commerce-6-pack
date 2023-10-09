const app = require("./app");
const dotenv = require("dotenv")
const db = require("./config/database")


dotenv.config({path:"backend/config/config.env"})


app.listen(process.env.PORT,() => {
    console.log(`Server is working on ${process.env.PORT}`);
})