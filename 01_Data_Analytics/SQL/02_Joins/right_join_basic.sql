/*
Topic: SQL Joins
Concept: RIGHT JOIN
Use Case: Orders linked to customers (including missing customers)
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name,
    o.order_id
FROM customers c
RIGHT JOIN orders o
    ON c.customer_id = o.customer_id;
