/*
Interview Question: Find median salary
Concepts: Window Functions
*/

SELECT
    AVG(salary) AS median_salary
FROM (
    SELECT
        salary,
        ROW_NUMBER() OVER (ORDER BY salary) AS rn,
        COUNT(*) OVER () AS total_count
    FROM employees
) t
WHERE rn IN (
    (total_count + 1) / 2,
    (total_count + 2) / 2
);
