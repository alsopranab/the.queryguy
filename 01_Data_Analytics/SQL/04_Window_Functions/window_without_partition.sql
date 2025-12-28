/*
Topic: Window Functions
Concept: Window function without PARTITION BY
Use Case: Rank employees across entire company
Source: Self-curated
*/

SELECT
    employee_name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS company_rank
FROM employees;
