const connection = require("../utils/db-connection");

const addStudents = (req, res) => {
  const { name, email, age } = req.body;
  const addStudentQuery = `INSERT INTO students (name,email,age) VALUES (?,?,?)`;

  connection.execute(addStudentQuery, [name, email, age], (err, result) => {
    if (err) {
      console.log("error while adding", err);
      res.status(500).json({ message: "error while adding" });
      return;
    }
    res.status(201).json({ message: `${name} added successfully` });
  });
};

const getAllStudents = (req, res) => {
  const getAllStudentsQuery = `SELECT * FROM students`;

  connection.execute(getAllStudentsQuery, (err, result) => {
    if (err) {
      console.log("error while getting students", err);
      res.status(500).json({ message: "error while getting students" });
      return;
    }
    res.status(200).json({ data: result });
  });
};

const getStudentById = (req, res) => {
  const { studentID } = req.params;
  const getStudentByIdQuery = `SELECT * FROM students WHERE id = ?`;

  connection.execute(getStudentByIdQuery, [studentID], (err, result) => {
    if (err) {
      console.log("error while getting student", err);
      res.status(500).json({ message: "error while getting student" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "student not found" });
      return;
    }

    res.status(200).json({ data: result });
  });
};

const updateStudent = (req, res) => {
  const { studentID } = req.params;
  const { name, email, age } = req.body;
  const updateStudentQuery = `UPDATE students SET name =?,email =?,age =? WHERE id =? `;

  connection.execute(
    updateStudentQuery,
    [name, email, age, studentID],
    (err, result) => {
      if (err) {
        console.log("error while updating student", err);
        res.status(500).json({ message: "error while updating student" });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "student not found" });
        return;
      }
      res.status(200).json({ data: `student  updated succesfully` });
    },
  );
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const deleteStudentQuery = ` DELETE FROM students WHERE id = ? `;

  connection.execute(deleteStudentQuery, [id], (err, result) => {
    if (err) {
      console.log("error while deleting student", err);
      res.status(500).json({ message: "error while deleting student" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "student not found" });
      return;
    }

    res.status(200).json({ data: `student  deleted successfully` });
  });
};
module.exports = {
  addStudents,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
