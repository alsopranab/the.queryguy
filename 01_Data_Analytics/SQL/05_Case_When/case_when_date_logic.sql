/*
Topic: CASE WHEN
Concept: Date-based conditions
Use Case: Flag orders as recent or old
Source: Self-curated
*/

SELECT
    order_id,
    order_date,
    CASE
        WHEN order_date >= CURRENT_DATE - INTERVAL '30' DAY THEN 'Recent'
        ELSE 'Old'
    END AS order_recency
FROM orders;
