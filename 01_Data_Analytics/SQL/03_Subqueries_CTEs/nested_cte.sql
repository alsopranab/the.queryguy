/*
Topic: CTE
Concept: Nested CTEs
Use Case: Top department by total salary expense
Source: Self-curated
*/

WITH dept_salary AS (
    SELECT
        department,
        SUM(salary) AS total_salary
    FROM employees
    GROUP BY department
),
ranked_dept AS (
    SELECT
        department,
        total_salary,
        RANK() OVER (ORDER BY total_salary DESC) AS dept_rank
    FROM dept_salary
)
SELECT
    department,
    total_salary
FROM ranked_dept
WHERE dept_rank = 1;
