import express from "express";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentWeekday = weekdays[today.getDay()];

const port = 3000;
const app = express();

app.get("/", (req,res) => {
    res.send(`<h1> Today is ${currentWeekday}.</h1>`);
});


app.listen(port, () => {
    console.log(`Server is rrunning on http://localhost:${port}/ and listening for requests`);
});
