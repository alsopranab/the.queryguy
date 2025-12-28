/*
Interview Question: Delete duplicate records
Concepts: CTE, ROW_NUMBER
Source: Self-curated
*/

WITH ranked_users AS (
    SELECT
        user_id,
        email,
        ROW_NUMBER() OVER (
            PARTITION BY email
            ORDER BY user_id
        ) AS row_num
    FROM users
)
DELETE FROM users
WHERE user_id IN (
    SELECT user_id
    FROM ranked_users
    WHERE row_num > 1
);
