const router = require("express").Router();

const getList12 = require("./get-list");
const addTest = require("./add-test");

router.get("/get-list", getList12)
router.post("/add", addTest)

module.exports = router;
