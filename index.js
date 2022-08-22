const inquirer = require('inquirer');
const mysql = require('mysql2');
const choices = [
    "Departments",
    "Roles",
    "Employees",
    "Department",
    "Add a Role",
    "Add an Employee"
]

const managerArray = ['None']

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'work_db'
    },
    console.log(`work_db database`)
);

function init() {

    inquirer
    .prompt([
        {
            type: 'list',
            message: "Select an Option",
            choices: choices,
            name: 'choices'
        }
    ]).then((data) => {
    if(data.choices === choices[0]) {
        console.log('Departments');
        return init();
    } else if(data.choices === choices[1]) {
        console.log('Roles');
        return init();
    } else if(data.choices === choices[2]) {
        console.log('Employees');
        return init();
    } else if(data.choices === choices[3]) {
        addDepartment();
    } else if(data.choices === choices[4]) {
        addRole();
    } else if(data.choices === choices[5]) {
        addEmployee();
    }
    }) 
}

function addDepartment () {

    inquirer
    .prompt([
        {
            type: 'input',
            message: "Department Name",
            name: 'depName'
        }
    ]).then((data) => {
     console.log(data);
     return init();
    })
};

function addRole () {

    inquirer
    .prompt([
        {
            type: 'input',
            message: "Name of Role",
            name: 'roleName'
        },
        {
            type: 'input',
            message: "Salary of Role",
            name: 'roleSalary'
        },
        {
            type: 'input',
            message: "Department of Role",
            name: 'roleDep'
        }
    ]).then((data) =>{
     console.log(data);
     return init
    })
};

function addEmployee() {

    inquirer
    .prompt([
        {
            type: 'input',
            message: "Employees First Name",
            name: 'firstName'
        },
        {
            type: 'input',
            message: "Employees Last Name",
            name: 'lastName'
        },
        {
            type: 'input',
            message: "Employees Role",
            name: 'empRole'
        },
        {
            type: 'list',
            message: "Employee Manager",
            choices: managerArray,
            name: 'empMgr'
        }
    ]).then((data) => {
     console.log(data);
     managerArray.push(data.firstName);
     return init()
    })

};

init();