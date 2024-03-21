const fs = require("fs");

fs.writeFile("message.pdf", "Hello World", (err)=>{
    if(err)throw err;
    console.log("this is a pdf file");
});



fs.writeFile("message.txt", "Hello World", (err)=>{
    if (err) throw err;
    console.log("this is a pdf file");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });