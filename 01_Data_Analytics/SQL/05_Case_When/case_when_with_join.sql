/*
Topic: CASE WHEN
Concept: CASE with JOIN
Use Case: Classify customers based on order activity
Source: Self-curated
*/

SELECT
    c.customer_id,
    c.customer_name,
    CASE
        WHEN COUNT(o.order_id) >= 10 THEN 'Frequent Buyer'
        WHEN COUNT(o.order_id) >= 1 THEN 'Occasional Buyer'
        ELSE 'No Orders'
    END AS customer_type
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.customer_name;
