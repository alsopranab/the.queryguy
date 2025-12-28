/*
Interview Question: Percentage contribution of each product to total revenue
Concepts: Window Functions
*/

SELECT
    product_id,
    SUM(order_amount) AS product_revenue,
    ROUND(
        100.0 * SUM(order_amount) / SUM(SUM(order_amount)) OVER (),
        2
    ) AS revenue_percentage
FROM orders
GROUP BY product_id;
