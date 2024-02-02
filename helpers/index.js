
const inquirer = require("inquirer");
const db = require("./connections")

const initQ = [
    {
        message: "What would you like to do?",
        type: "list",
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
];
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
];
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
        type: "list",
        choices: ["Brewer", "Head Brewer", "Cellar Operator", "Canning Line Operator", "Lab Technician", "Keg Washer", "Packaging Lead"]
    },
    {
        message: "Who is that employee's manager?",
        name: "manager",
        type: "list",
        choices: ["Justin Goomba", "Jonathan Florita", "Elijah Millar", "Ethan Schmeethan"]
    },
];

function userRes(response) {
    switch (response) {
        case 'View all Departments':
            viewDepartments()
            break;
        case 'View all Roles':
            viewRoles()
            break;
        case 'View all Employees':
            viewEmployees()
            break
        case 'Create new Department':
            createDepartment()
            break
        case 'Create new Role':
            createRole()
            break
        case 'Create new Employee':
            createEmp()
            break
        case "Update an Employee's Role":
            updateEmp()
            break
    }
};

async function viewDepartments() {
    db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err
        console.table(res)
        init(initQ)
    })
}
function viewRoles() {
    db.query(`SELECT dept_name, title, salary
    FROM roles
    JOIN departments
    ON roles.dept_id = departments.id;`, (err, res) => {
        if (err) throw err
        console.table(res)
        init(initQ)
    })
}
function viewEmployees() {
    db.query(`SELECT first_name, last_name, title, manager_id, salary, dept_name
    FROM roles
    JOIN departments
    ON roles.dept_id = departments.id
    JOIN employees
    ON roles.id = employees.role_id;`, (err, res) => {
        if (err) throw err
        console.table(res)
        init(initQ)
    })
}

function createDepartment() {
    inquirer.prompt(deptQs)
        .then((responses) => {
            db.query("INSERT INTO departments SET ?",
                {
                    dept_name: responses.dept
                }
            )
            init(initQ)
        })
}

function createRole() {
    inquirer.prompt(roleQs)
        .then((responses) => {
            db.query("INSERT INTO roles SET ?",
                {
                    title: responses.role,
                    salary: responses.salary,
                    dept_id: responses.assigndep
                }
            )
            init(initQ)
        })
}

function createEmp() {
    inquirer.prompt(empQs)
        .then((responses) => {
            db.query("INSERT INTO employees SET ?",
                {
                    first_name: responses.first,
                    last_name: responses.last,
                    role_id: responses.emprole,
                    manager_id: responses.manager
                }
            )
            init(initQ)
        })
}

function updateEmp() {
    inquirer.prompt(updateQs)
        .then((responses) => {
            db.query("") // select * from ?? where id = x
            //db query 
        })
}

function init(question) {
    inquirer.prompt(question)
        .then((response) => {
            console.log(response.firstq)
            userRes(response.firstq)
        })
        .catch((error) => {
            console.error(error)
        })
}

init(initQ);


// findOneByPrimary(id, cb) {
//     return db.query('SELECT * FROM ?? WHERE id = ?', [this.tableName, id], cb)
// }