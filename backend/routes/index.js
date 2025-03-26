const express = require("express");

const UserRouter = require("./user");
const LoanRouter = require("./loans");
const router = express.Router();
router.use("/user", UserRouter);
router.use("/loan", LoanRouter);


module.exports = router;