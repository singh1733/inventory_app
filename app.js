const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", categoryRouter);
app.use("/items", itemRouter);

app.listen(PORT, () => console.log("Port 3000 running"));
