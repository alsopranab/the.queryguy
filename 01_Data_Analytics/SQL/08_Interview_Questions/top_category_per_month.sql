/*
Interview Question: Top product category per month
Concepts: Window Functions
*/

SELECT
    month,
    category,
    revenue
FROM (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        category,
        SUM(order_amount) AS revenue,
        RANK() OVER (
            PARTITION BY DATE_TRUNC('month', order_date)
            ORDER BY SUM(order_amount) DESC
        ) AS rnk
    FROM orders
    GROUP BY month, category
) t
WHERE rnk = 1;
