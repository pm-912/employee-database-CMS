INSERT INTO departments (dept_name)
VALUES ("Production"),
("Quality Control"),
("Packaging"),
("Human Resources");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Brewer", 60000, 1),
("Head Brewer", 70000, 1),
("Cellar Operator", 55000, 1),
("Canning Line Operator", 45000, 3),
("Lab Technician", 50000, 2),
("Keg Washer", 50000, 3),
("Packaging Lead", 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Justin", "Goomba", 2, NULL),
("Ethan", "Schmeethan", 1, 1),
("Chris", "Bygoat", 1, 1),
("Elijah", "Millar", 3, 1),
("Bjorn", "Flossy", 3, 1),
("Jonathan", "Florita", 7, NULL),
("Joshy", "Kupala", 4, 6),
("Christa", "George", 6, 6),
("Chip", "Fischman", 5, NULL);
