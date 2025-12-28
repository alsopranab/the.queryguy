/*
Interview Question: Customers who ordered in consecutive months
Concepts: LAG, Date Logic
*/

SELECT DISTINCT customer_id
FROM (
    SELECT
        customer_id,
        DATE_TRUNC('month', order_date) AS order_month,
        LAG(DATE_TRUNC('month', order_date)) OVER (
            PARTITION BY customer_id
            ORDER BY DATE_TRUNC('month', order_date)
        ) AS prev_month
    FROM orders
) t
WHERE order_month = prev_month + INTERVAL '1 month';
