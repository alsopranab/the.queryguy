/*
Topic: SQL Joins
Concept: FULL OUTER JOIN
Use Case: All customers and all orders
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name,
    o.order_id
FROM customers c
FULL OUTER JOIN orders o
    ON c.customer_id = o.customer_id;
