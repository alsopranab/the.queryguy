/*
Topic: Real World Analytics
Use Case: Average Order Value (AOV)
Business Question: What is the average order size?
Source: Self-curated
*/

SELECT
    SUM(order_amount) / COUNT(DISTINCT order_id) AS average_order_value
FROM orders;
