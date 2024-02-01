
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
        message: "Please enter a name for the department",
        name: "dept"
    }
]
const roleQs = [
    {
        message: "Please a name for the new role",
        name: "role"
    },
    {
        message: "Please enter a salary for the new role",
        name: "salary"
    },
    {
        message: "What department should this role be assigned to?",
        name: "assigndep"
    },
]
const empQs = [
    {
        message: "What is the employee's first name?",
        name: "first"
    },
    {
        message: "What is the employee's last name?",
        name: "last"
    },
    {
        message: "What is the employee's role?",
        name: "emprole",
        type: "choices",
        choices: ["Brewer", "Head Brewer", "Cellar Operator", "Canning Line Operator", "Lab Technician", "Keg Washer", "Packaging Lead"]
    },
    {
        message: "Who is that employee's manager?",
        name: "manager",
        type: "choices",
        choices: ["Justin Goomba", "Jonathan Florita", "Elijah Millar", "Ethan Schmeethan"]
    },
]

function createNew(qarray) {
    inquirer.prompt(qarray)
        .then ((responses) => {
            //new db query insert into
        })
}

function userRes(response) {
    switch (response) {
        case 'View all Departments':
            return new DeptTbl
        case 'View all Roles':
            return new RoleTbl
        case 'View all Employees':
            return new EmpTbl
        case 'Create new Department':
            createNew(deptQs);
        case 'Create new Role':
            createNew(roleQs);
        case 'Create new Employee':
            createNew(empQs);
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