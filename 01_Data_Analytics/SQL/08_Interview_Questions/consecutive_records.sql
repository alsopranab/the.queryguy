/*
Interview Question: Find consecutive login days
Concepts: Window Functions
Source: Self-curated
*/

SELECT
    user_id,
    login_date
FROM (
    SELECT
        user_id,
        login_date,
        login_date - LAG(login_date) OVER (
            PARTITION BY user_id
            ORDER BY login_date
        ) AS day_diff
    FROM user_logins
) t
WHERE day_diff = 1;
