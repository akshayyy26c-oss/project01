const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/signup", (req, res) => {
  const { name, age, city, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, age, city, email, password) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, age, city, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database Error"
        });
      }

      res.json({
        message: "User Saved Successfully"
      });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});