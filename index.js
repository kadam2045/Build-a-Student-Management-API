const express = require("express");
const app = express();
const connection = require("./utils/db-connection");
const studentsRoutes = require("./routes/stduentsRoutes");

app.use(express.json());
app.use("/student", studentsRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
