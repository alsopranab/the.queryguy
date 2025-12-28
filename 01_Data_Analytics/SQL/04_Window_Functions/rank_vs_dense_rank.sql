/*
Topic: Window Functions
Concept: RANK vs DENSE_RANK
Use Case: Salary ranking with and without gaps
Source: Self-curated
*/

SELECT
    employee_name,
    department,
    salary,
    RANK() OVER (
        PARTITION BY department
        ORDER BY salary DESC
    ) AS rank_value,
    DENSE_RANK() OVER (
        PARTITION BY department
        ORDER BY salary DESC
    ) AS dense_rank_value
FROM employees;
