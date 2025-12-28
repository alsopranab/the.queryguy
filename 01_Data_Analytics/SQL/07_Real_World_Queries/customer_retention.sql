/*
Topic: Real World Analytics
Use Case: Customer retention
Business Question: How many customers return after first purchase?
Source: Self-curated
*/

WITH customer_orders AS (
    SELECT
        customer_id,
        COUNT(order_id) AS order_count
    FROM orders
    GROUP BY customer_id
)
SELECT
    COUNT(CASE WHEN order_count > 1 THEN 1 END) AS retained_customers,
    COUNT(CASE WHEN order_count = 1 THEN 1 END) AS one_time_customers
FROM customer_orders;
