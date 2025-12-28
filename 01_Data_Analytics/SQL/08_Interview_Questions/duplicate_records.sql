/*
Interview Question: Find duplicate records
Concepts: GROUP BY, HAVING
Source: Self-curated
*/

SELECT
    email,
    COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
