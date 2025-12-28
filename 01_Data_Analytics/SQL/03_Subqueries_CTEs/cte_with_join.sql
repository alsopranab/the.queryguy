/*
Topic: CTE
Concept: CTE with JOIN
Use Case: Employees earning above department average
Source: Self-curated
*/

WITH dept_avg AS (
    SELECT
        department,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
)
SELECT
    e.employee_name,
    e.department,
    e.salary
FROM employees e
JOIN dept_avg d
    ON e.department = d.department
WHERE e.salary > d.avg_salary;
