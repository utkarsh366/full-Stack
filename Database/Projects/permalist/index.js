import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
    host: "localhost",
    database: "permalist",
    password: "0987654321",
    port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const id = req.body.updatedItemId;
  const title = req.body.updatedItemTitle;

  const item = items.find(item => item.id == id);
  if (item) {
    item.title = title;
  }

  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const id = parseInt(req.body.deletedItemId, 10);  // Convert the id to an integer
  const itemIndex = items.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
  }

  res.redirect("/");  // Redirect back to the main page
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
