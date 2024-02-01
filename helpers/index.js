
const inquirer = require("inquirer");

const initQ = [
    {
        message: "What would you like to do?",
        type: "choices",
        name: "firstq",
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Create new Role",
            "Create new Employee",
            "Update an Employee's Role"
        ]
    }
]

function userRes(response) {
    switch (response) {
        case 'View all Departments':
            return new DeptTbl
        case 'View all Roles':
            return new RoleTbl
        case 'View all Employees':
            return new EmpTbl
        case 'Create new Role':
            createRole();
        case 'Create new Employee':
            createEmp();
        case "Update an Employee's Role":
            updateEmp();
    }
};



function init(question) {
    inquirer.prompt(question)
        .then ((response) => {
            userRes(response)
        })
        .catch((error) => {
            console.error(error)
        })
}

init(initQ);