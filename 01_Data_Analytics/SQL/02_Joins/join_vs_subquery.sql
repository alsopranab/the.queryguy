/*
Topic: SQL Joins
Concept: Join vs Subquery
Use Case: Customers with at least one order
Source: Self-curated
*/

-- Using JOIN
SELECT DISTINCT
    c.customer_id,
    c.customer_name
FROM customers c
INNER JOIN orders o
    ON c.customer_id = o.customer_id;

-- Using Subquery
SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id
    FROM orders
);
