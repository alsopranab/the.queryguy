/*
Topic: Subqueries
Concept: Correlated Subquery
Use Case: Highest paid employee in each department
Source: Self-curated
*/

SELECT
    e.employee_id,
    e.employee_name,
    e.department,
    e.salary
FROM employees e
WHERE e.salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department = e.department
);
