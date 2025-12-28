/*
Topic: CTE
Concept: WITH clause
Use Case: Calculate department-wise average salary
Source: Self-curated
*/

WITH dept_avg_salary AS (
    SELECT
        department,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
)
SELECT
    department,
    avg_salary
FROM dept_avg_salary;
