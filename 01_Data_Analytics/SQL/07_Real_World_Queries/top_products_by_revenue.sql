/*
Topic: Real World Analytics
Use Case: Top products by revenue
Business Question: Which products generate the most revenue?
Source: Self-curated
*/

SELECT
    product_id,
    SUM(order_amount) AS total_revenue
FROM orders
GROUP BY product_id
ORDER BY total_revenue DESC
LIMIT 10;
