/*
Interview Question: Day with highest revenue
Concepts: Aggregation, ORDER BY
*/

SELECT
    order_date,
    SUM(order_amount) AS total_revenue
FROM orders
GROUP BY order_date
ORDER BY total_revenue DESC
LIMIT 1;
