const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const saltRounds = 10;

var mysql = require("mysql");
const { response } = require("express");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "workmanagement",
});
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// create a user
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // const hash = bcrypt.hashSync(password, saltRounds);
  // Store hash in your password DB.
  pool.query(
    `INSERT INTO Users (UserName, Password) VALUES (?,?);`,
    [username, password],
    function (error, results, fields) {
      if (error){
        console.log(error)
        res.status(400).send('Error');
      } 
      else{
        res.send("Success");
      }
      
    }
  );
});

app.get("/login", (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    pool.query(
      `SELECT * FROM Users WHERE username = ?;`,
      [username],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length == 0) {
          res.send("Password is not found");
        } else {
          const answer = password == results[0].Password ? true : false;
          // const answer = bcrypt.compareSync(password, results[0].Password); // true
          res.send(answer);
        }
      }
    );
  } catch (error) {}
});

app.get("/3", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Store hash in your password DB.
  // Store hash in your password DB.
  console.log(answer);
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM Users;", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
    console.log(results);
  });
}); 
app.get("/hello", (req, res) => {
  res.send("hello");
});
 
app.listen(port, () => {
  console.log("app is listening ");
});
 