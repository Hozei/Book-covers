import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import ejs from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Book Notes",
    password: "Blackm0nday",
    port: 5432,
  });
  db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let book_items = [];

// Home route API
app.get('/', (req, res) => {
    const book_items = [
        { title: 'Ego Is the Enemy - by Ryan Holiday', cover: 'Ego book.jpg' },
        { title: 'Philosophy: a Complete Introduction - by Sharon Kaye', cover: "philosophy.jpg" },
        { title: 'The Wisdom of No Escape - by Pema Chödrön', cover: 'wisdom book.jpg' }
    ];
    res.render('index.ejs', { book_items });
});

  app.post("/add", async (req, res) => {
    const book_items = req.body.newItem;
    try{
      await db.query("INSERT INTO book_items (title) VALUES ($1)", [item]);
      book_items.push({ title: item });
      res.redirect("/");
    } catch (err){
      console.log(err);
    }
   
  }); 



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });