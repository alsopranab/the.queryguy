/*
Topic: SQL Basics
Concept: BETWEEN, IN
Use Case: Orders placed in a specific date range and region
Source: Self-curated
*/

SELECT
    order_id,
    order_date,
    region,
    order_amount
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'
  AND region IN ('North', 'South');
