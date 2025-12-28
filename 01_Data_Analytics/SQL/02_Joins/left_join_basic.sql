/*
Topic: SQL Joins
Concept: LEFT JOIN
Use Case: Customers with or without orders
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name,
    o.order_id
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id;
