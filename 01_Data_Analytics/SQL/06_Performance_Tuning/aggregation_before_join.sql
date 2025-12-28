/*
Topic: Performance Tuning
Concept: Aggregate before JOIN
Use Case: Reduce join data volume
Source: Self-curated
*/

WITH order_summary AS (
    SELECT
        customer_id,
        SUM(order_amount) AS total_spend
    FROM orders
    GROUP BY customer_id
)
SELECT
    c.customer_name,
    o.total_spend
FROM customers c
JOIN order_summary o
    ON c.customer_id = o.customer_id;
