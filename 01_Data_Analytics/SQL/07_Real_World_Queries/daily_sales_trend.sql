/*
Topic: Real World Analytics
Use Case: Daily sales trend
Business Question: How are sales trending day by day?
Source: Self-curated
*/

SELECT
    order_date,
    SUM(order_amount) AS daily_sales
FROM orders
GROUP BY order_date
ORDER BY order_date;
