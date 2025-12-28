/*
Topic: SQL Basics
Concept: GROUP BY, HAVING
Use Case: Departments with more than 10 employees
Source: Self-curated
*/

SELECT
    department,
    COUNT(employee_id) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(employee_id) > 10;
