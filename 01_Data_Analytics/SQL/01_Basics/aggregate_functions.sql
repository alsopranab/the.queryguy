/*
Topic: SQL Basics
Concept: COUNT, SUM, AVG, MIN, MAX
Use Case: Basic sales summary
Source: Self-curated
*/

SELECT
    COUNT(order_id) AS total_orders,
    SUM(order_amount) AS total_revenue,
    AVG(order_amount) AS avg_order_value,
    MIN(order_amount) AS min_order_value,
    MAX(order_amount) AS max_order_value
FROM orders;
