/*
Topic: Performance Tuning
Concept: EXISTS vs IN
Use Case: Customers with orders
Source: Self-curated
*/

-- Preferred for large datasets
SELECT
    c.customer_id,
    c.customer_name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);

-- Can be slower if subquery returns large result
SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
