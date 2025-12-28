/*
Topic: SQL Joins
Concept: SELF JOIN
Use Case: Employee and manager hierarchy
Source: Self-curated
*/

SELECT
    e.employee_name AS employee,
    m.employee_name AS manager
FROM employees e
LEFT JOIN employees m
    ON e.manager_id = m.employee_id;
