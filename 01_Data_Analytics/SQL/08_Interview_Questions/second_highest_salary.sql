/*
Interview Question: Find the second highest salary
Concepts: Subquery, DISTINCT
Source: Self-curated
*/

SELECT
    MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
