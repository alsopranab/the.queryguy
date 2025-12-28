/*
Interview Question: First and last order date per customer
Concepts: Aggregation
*/

SELECT
    customer_id,
    MIN(order_date) AS first_order_date,
    MAX(order_date) AS last_order_date
FROM orders
GROUP BY customer_id;
