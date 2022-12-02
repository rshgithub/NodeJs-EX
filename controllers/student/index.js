const router = require("express").Router();
 

router.get("/students-list", require("./students-list"));
router.get("/studentName/:name", require("./student-by-name"));
router.get("/studentId/:id", require("./student-by-id"));

router.post("/addStudent",  require("./add-student"));
router.post("/editStudent/:id",  require("./edit-student"));

module.exports = router;
 