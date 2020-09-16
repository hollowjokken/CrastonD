const router = require("./routes/route");
const express = require("express");
const app = express();

app.use("/", router);
app.listen(3000, () => console.log("HERE!!!"));
