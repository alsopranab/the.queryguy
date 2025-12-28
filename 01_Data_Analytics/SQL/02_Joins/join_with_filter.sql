/*
Topic: SQL Joins
Concept: Join with WHERE condition
Use Case: Orders placed in 2024
Source: Self-curated
*/

SELECT
    c.customer_name,
    o.order_id,
    o.order_amount
FROM customers c
INNER JOIN orders o
    ON c.customer_id = o.customer_id
WHERE YEAR(o.order_date) = 2024;
