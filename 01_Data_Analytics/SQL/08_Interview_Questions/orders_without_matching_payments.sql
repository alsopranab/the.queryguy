/*
Interview Question: Orders without payments
Concepts: LEFT JOIN
*/

SELECT
    o.order_id
FROM orders o
LEFT JOIN payments p
    ON o.order_id = p.order_id
WHERE p.order_id IS NULL;
