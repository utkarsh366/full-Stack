import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "0987654321",
  port: 5432,
});

db.connect();

// Ensure the users table exists
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
  );
`;

db.query(createUsersTable)
  .then(() => console.log("Users table created successfully"))
  .catch(err => console.error("Error creating users table", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    // Check if the email already exists
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      // Insert the new user
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);

      console.log(result);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error registering user');
  }
});

app.post("/login", async (req,res)=>{
   const email = req.body.username;
   const password = req.body.password;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
