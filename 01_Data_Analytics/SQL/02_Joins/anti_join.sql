/*
Topic: SQL Joins
Concept: Anti Join (LEFT JOIN + NULL)
Use Case: Customers with no orders
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
