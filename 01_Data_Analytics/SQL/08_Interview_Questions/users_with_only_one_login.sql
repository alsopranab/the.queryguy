/*
Interview Question: Users who logged in only once
Concepts: GROUP BY, HAVING
*/

SELECT
    user_id
FROM user_logins
GROUP BY user_id
HAVING COUNT(*) = 1;
