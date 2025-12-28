/*
Topic: SQL Joins
Concept: INNER JOIN
Use Case: Get customer orders
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.order_date,
    o.order_amount
FROM customers c
INNER JOIN orders o
    ON c.customer_id = o.customer_id;
