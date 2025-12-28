/*
Topic: Performance Tuning
Concept: Index-friendly WHERE clause
Use Case: Filter orders by date efficiently
Source: Self-curated
*/

-- GOOD: Index on order_date can be used
SELECT
    order_id,
    order_amount
FROM orders
WHERE order_date >= '2024-01-01'
  AND order_date < '2024-02-01';

-- BAD: Function on column breaks index usage
SELECT
    order_id,
    order_amount
FROM orders
WHERE YEAR(order_date) = 2024;
