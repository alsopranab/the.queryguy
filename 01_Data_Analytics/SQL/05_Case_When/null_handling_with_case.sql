/*
Topic: CASE WHEN
Concept: Handling NULL values
Use Case: Replace NULL payment status
Source: Self-curated
*/

SELECT
    order_id,
    CASE
        WHEN payment_status IS NULL THEN 'Unknown'
        ELSE payment_status
    END AS payment_status_cleaned
FROM orders;
