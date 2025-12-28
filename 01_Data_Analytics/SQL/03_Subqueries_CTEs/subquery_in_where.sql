/*
Topic: Subqueries
Concept: Subquery in WHERE clause
Use Case: Customers who placed orders
Source: Self-curated
*/

SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id
    FROM orders
);
