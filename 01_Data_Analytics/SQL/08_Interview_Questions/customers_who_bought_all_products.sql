/*
Interview Question: Customers who bought all products
Concepts: COUNT DISTINCT
*/

SELECT
    customer_id
FROM orders
GROUP BY customer_id
HAVING COUNT(DISTINCT product_id) = (
    SELECT COUNT(DISTINCT product_id)
    FROM products
);
