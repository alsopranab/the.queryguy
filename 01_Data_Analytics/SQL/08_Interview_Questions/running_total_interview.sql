/*
Interview Question: Calculate running total
Concepts: Window Functions
Source: Self-curated
*/

SELECT
    order_date,
    SUM(order_amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM orders;
