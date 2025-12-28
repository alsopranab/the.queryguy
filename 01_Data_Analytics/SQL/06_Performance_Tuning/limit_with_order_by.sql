/*
Topic: Performance Tuning
Concept: LIMIT with ORDER BY
Use Case: Fetch top N records efficiently
Source: Self-curated
*/

SELECT
    product_id,
    SUM(order_amount) AS revenue
FROM orders
GROUP BY product_id
ORDER BY revenue DESC
LIMIT 10;
