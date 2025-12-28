/*
Topic: SQL Basics
Concept: CASE WHEN
Use Case: Categorize customers based on spending
Source: Self-curated
*/

SELECT
    customer_id,
    total_spend,
    CASE
        WHEN total_spend >= 100000 THEN 'High Value'
        WHEN total_spend >= 50000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS customer_segment
FROM customer_spend;
