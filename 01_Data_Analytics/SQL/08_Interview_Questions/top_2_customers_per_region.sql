/*
Interview Question: Top 2 customers by spend in each region
Concepts: Window Functions
*/

SELECT
    region,
    customer_id,
    total_spend
FROM (
    SELECT
        region,
        customer_id,
        SUM(order_amount) AS total_spend,
        DENSE_RANK() OVER (
            PARTITION BY region
            ORDER BY SUM(order_amount) DESC
        ) AS spend_rank
    FROM orders
    GROUP BY region, customer_id
) t
WHERE spend_rank <= 2;
