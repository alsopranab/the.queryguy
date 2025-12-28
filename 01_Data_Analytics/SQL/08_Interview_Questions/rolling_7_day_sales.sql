/*
Interview Question: Rolling 7-day sales
Concepts: Window Functions
*/

SELECT
    order_date,
    SUM(order_amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7_day_sales
FROM orders;
