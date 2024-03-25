//npm init
// npm i qr-image
//npm i inquirer



import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([
    {"message": "Type the message",
name: "URL",
}
  ])
  .then((answers) => {
const url = answers.URL ;
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));

fs.writeFile("URL.txt", url, (err)=>{
    if(err) throw err;
    console/log("this file has been saved");
});


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 
 
