/*
Topic: CASE WHEN
Concept: CASE with GROUP BY
Use Case: Revenue by customer segment
Source: Self-curated
*/

SELECT
    CASE
        WHEN total_spend >= 100000 THEN 'High Value'
        WHEN total_spend >= 50000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS customer_segment,
    SUM(total_spend) AS segment_revenue
FROM customer_spend
GROUP BY
    CASE
        WHEN total_spend >= 100000 THEN 'High Value'
        WHEN total_spend >= 50000 THEN 'Medium Value'
        ELSE 'Low Value'
    END;
