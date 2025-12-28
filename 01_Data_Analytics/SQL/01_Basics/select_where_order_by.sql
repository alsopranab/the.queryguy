/*
Topic: SQL Basics
Concept: SELECT, WHERE, ORDER BY
Use Case: Filter active customers and sort by signup date
Source: Self-curated
*/

SELECT
    customer_id,
    customer_name,
    signup_date
FROM customers
WHERE status = 'ACTIVE'
ORDER BY signup_date DESC;
