
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
            "Create new Department",
            "Create new Role",
            "Create new Employee",
            "Update an Employee's Role"
        ]
    }
];

const deptQs = [
    {
        //content
    },
    {
        //content
    },
    {
        //content
    },
]
const roleQs = [
    {
        //content
    },
    {
        //content
    },
    {
        //content
    },
]
const empQs = [
    {
        //content
    },
    {
        //content
    },
    {
        //content
    },
]

function userRes(response) {
    switch (response) {
        case 'View all Departments':
            return new DeptTbl
        case 'View all Roles':
            return new RoleTbl
        case 'View all Employees':
            return new EmpTbl
        case 'Create new Department':
            init(deptQs);
        case 'Create new Role':
            init(roleQs);
        case 'Create new Employee':
            init(empQs);
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