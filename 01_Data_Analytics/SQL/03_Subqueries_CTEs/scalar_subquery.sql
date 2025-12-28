/*
Topic: Subqueries
Concept: Scalar Subquery
Use Case: Employees earning above average salary
Source: Self-curated
*/

SELECT
    employee_id,
    employee_name,
    salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
