/*
Interview Question: Find the Nth highest salary
Concepts: Window Functions
Source: Self-curated
*/

SELECT
    salary
FROM (
    SELECT
        salary,
        DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
    FROM employees
) t
WHERE salary_rank = 3;
