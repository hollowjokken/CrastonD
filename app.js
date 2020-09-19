const router = require("./routes/route");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
console.log("Crastin face saas");
app.use("/", router);
app.listen(3000, () => console.log("Server is Runing!!!"));
