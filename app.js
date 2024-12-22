const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const categoryRouter = require("./routes/categoryRouter");

app.use(express.urlencoded({ extended: true }));

app.use("/", categoryRouter);




app.listen(PORT, () => console.log("Port 3000 running"));
