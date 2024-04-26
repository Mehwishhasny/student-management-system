#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function StudentData(): Promise<void>{
const data = await inquirer.prompt(
    {
        message : chalk.green.bold("Please enter your full name:"),
        type: "input",
        name: "fullName",
   }
);

const randomID = Math.floor(10000 + Math.random() * 90000);
console.log(chalk.white.bold(chalk.bgBlue(`Student added with the ID ${randomID}`)));
    
let courseSelection = await inquirer.prompt(
    {
        message: chalk.green.bold("Please select course/ courses you want to enroll in:"),
        type: "checkbox",
        name: "courses",
        choices:["Web development", "Metaverse", "Block Chain", "Graphic designing", "None"]
    }
);

if(courseSelection.courses === "None"){
    console.log(chalk.black.red(chalk.bgRed("Please select any of the course.")));
    return;
};

const moreCourses = await inquirer.prompt(
    {
        message: chalk.blue.bold('Would you like to select more courses?'),
        type: "confirm",
        name: "extracourses",
        default: false,
    }
);
if(moreCourses.extracourses){
    console.log(chalk.blue("Let's select more courses:"));
    let additionalCourses = await inquirer.prompt(
        {
            message: chalk.green.bold("Please select additional course/courses"),
            type: "checkbox",
            name: "addCourse",
            choices: ["UX/UI", "Digital marketing", "Freelancing"]
        }
    );


let courseFee = courseSelection.courses.length * 2000;
let addCourseFee = additionalCourses.addCourse.length * 3000;
let balance = 50000;
let remainingBalance = balance - courseFee -addCourseFee;


console.log(chalk.yellow(`Name: ${data.fullName}`));
console.log(chalk.yellow(`ID: ${randomID}`));
console.log(chalk.yellow(`Balance: ${balance}`));
console.log(chalk.yellow(`Courses Enrolled: ${courseSelection.courses}`));
console.log(chalk.yellow(`Additional courses: ${additionalCourses.addCourse}`));
console.log(chalk.yellow(`Course fee: ${courseFee}`));
console.log(chalk.yellow(`Additional Course fee: ${addCourseFee}`));
console.log(chalk.yellow(`Remaining balance: ${remainingBalance}`));
}
else {
    
    let courseFee = courseSelection.courses.length * 2000;
    let balance = 50000;
    let remainingBalance = balance - courseFee;

    console.log(chalk.yellow(`Name: ${data.fullName}`));
    console.log(chalk.yellow(`ID: ${randomID}`));
    console.log(chalk.yellow(`Balance: ${balance}`));
    console.log(chalk.yellow(`Courses Enrolled: ${courseSelection.courses}`));
    console.log(chalk.yellow(`Course fee: ${courseFee}`));
    console.log(chalk.yellow(`Remaining balance: ${remainingBalance}`));
}

};
StudentData();