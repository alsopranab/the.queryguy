/*
Topic: Window Functions
Concept: Top N per group
Use Case: Top 3 highest paid employees per department
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
        DENSE_RANK() OVER (
            PARTITION BY department
            ORDER BY salary DESC
        ) AS salary_rank
    FROM employees
) t
WHERE salary_rank <= 3;
