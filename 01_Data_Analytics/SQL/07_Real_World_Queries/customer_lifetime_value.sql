/*
Topic: Real World Analytics
Use Case: Customer Lifetime Value
Business Question: How valuable is each customer?
Source: Self-curated
*/

SELECT
    customer_id,
    SUM(order_amount) AS lifetime_value
FROM orders
GROUP BY customer_id;
