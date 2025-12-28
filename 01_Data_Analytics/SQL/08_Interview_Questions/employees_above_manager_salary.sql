/*
Interview Question: Employees earning more than their manager
Concepts: Self Join
*/

SELECT
    e.employee_name,
    e.salary AS employee_salary,
    m.salary AS manager_salary
FROM employees e
JOIN employees m
    ON e.manager_id = m.employee_id
WHERE e.salary > m.salary;
