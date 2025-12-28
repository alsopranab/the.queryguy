/*
Topic: Window Functions
Concept: ROW_NUMBER
Use Case: Assign unique row numbers per department
Source: Self-curated
*/

SELECT
    employee_id,
    employee_name,
    department,
    ROW_NUMBER() OVER (
        PARTITION BY department
        ORDER BY salary DESC
    ) AS row_num
FROM employees;
