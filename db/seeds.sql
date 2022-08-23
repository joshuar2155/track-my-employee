INSERT INTO department (department_name)
VALUES ("IT"),("HR"),("Sales"),("Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Tech Support", 100000, 1),
("Human Resources Manager", 100000, 2),
("Sales Associate", 100000, 3),
("Sales Manager", 100000, 3),
("Inside Sales", 100000, 3),
("Marketing Manager", 100000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values ("John", "Doe", 1, NULL),
("Jane", "Doe", 2, NULL),
("Billy", "Bob", 3, NULL),
("Hocus", "Pocus", 4, NULL),
("Santa", "Claus", 5, NULL);