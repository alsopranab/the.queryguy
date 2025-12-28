/*
Topic: Window Functions
Concept: Moving Average
Use Case: 3-day moving average of daily sales
Source: Self-curated
*/

SELECT
    order_date,
    daily_sales,
    AVG(daily_sales) OVER (
        ORDER BY order_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3_days
FROM daily_sales;
