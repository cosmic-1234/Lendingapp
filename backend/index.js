const express = require("express");

const cors = require("cors");
//const router = express.Router();

const WorkRouter = require("./routes/index");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", WorkRouter);



app.listen(3000);