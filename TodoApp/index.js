const express = require("express");
const app = express();
const todoRoutes = require("./routes/route");
const dbConnect = require("./config/db")
dbConnect();

require("dotenv").config();
const PORT = process.env.PORT || 4000
app.use(express.json());
app.use("/api/v1", todoRoutes);

app.get("/", (req,res)=> {
    res.send(`<h1>Hi there</h1>`)
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
})