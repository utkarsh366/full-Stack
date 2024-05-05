import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "0987654321",
    port: "5432",
});

db.connect();

db.query("SELECT * FROM capitals", (err,res)=> {
    if(err){
        console.error("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }
    db.end();
});