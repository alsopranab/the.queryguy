/*
Topic: Window Functions
Concept: PERCENT_RANK, NTILE
Use Case: Bucket customers by spending percentile
Source: Self-curated
*/

SELECT
    customer_id,
    total_spend,
    PERCENT_RANK() OVER (ORDER BY total_spend) AS percent_rank,
    NTILE(4) OVER (ORDER BY total_spend) AS quartile
FROM customer_spend;
