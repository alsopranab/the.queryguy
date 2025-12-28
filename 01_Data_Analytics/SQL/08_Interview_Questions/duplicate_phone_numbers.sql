/*
Interview Question: Find duplicate phone numbers
Concepts: GROUP BY
*/

SELECT
    phone_number,
    COUNT(*) AS cnt
FROM customers
GROUP BY phone_number
HAVING COUNT(*) > 1;
