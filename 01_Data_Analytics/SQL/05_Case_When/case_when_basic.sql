/*
Topic: CASE WHEN
Concept: Basic conditional logic
Use Case: Categorize orders by value
Source: Self-curated
*/

SELECT
    order_id,
    order_amount,
    CASE
        WHEN order_amount >= 100000 THEN 'High Value'
        WHEN order_amount >= 50000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_category
FROM orders;
