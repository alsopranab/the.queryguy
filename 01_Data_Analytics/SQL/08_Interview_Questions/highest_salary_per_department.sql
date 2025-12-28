/*
Interview Question: Highest salary in each department
Concepts: Window Functions
Source: Self-curated
*/

SELECT
    employee_name,
    department,
    salary
FROM (
    SELECT
        employee_name,
        department,
        salary,
        RANK() OVER (
            PARTITION BY department
            ORDER BY salary DESC
        ) AS dept_rank
    FROM employees
) t
WHERE dept_rank = 1;
