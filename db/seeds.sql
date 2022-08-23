INSERT INTO department (department_name)
VALUES ("IT"),("HR"),("Sales"),("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Tech Support", 100000, 1),
("Human Resources Manager", 100000, 2),
("Sales Associate", 100000, 3),
("Sales Manager", 100000, 3),
("Inside Sales", 100000, 3),
("Marketing Manager", 100000, 4);


INSERT INTO employee (first_name, last_name, role_id)
Values ("John", "Doe", 1),
("Jane", "Doe", 2),
("Billy", "Bob", 3),
("Hocus", "Pocus", 4),
("Santa", "Claus", 5);