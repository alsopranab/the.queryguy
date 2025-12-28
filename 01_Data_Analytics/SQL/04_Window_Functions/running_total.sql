/*
Topic: Window Functions
Concept: Running Total
Use Case: Cumulative sales over time
Source: Self-curated
*/

SELECT
    order_date,
    order_amount,
    SUM(order_amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM orders;
