const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentsController");

router.post("/add", studentController.addStudents);
router.get("/get", studentController.getAllStudents);
router.get("/get/:studentID", studentController.getStudentById);
router.put("/update/:studentID", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
