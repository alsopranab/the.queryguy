/*
Topic: Performance Tuning
Concept: Filter placement in JOIN
Use Case: Reduce rows early
Source: Self-curated
*/

-- Better: filter in JOIN condition
SELECT
    c.customer_name,
    o.order_id
FROM customers c
JOIN orders o
    ON c.customer_id = o.customer_id
   AND o.order_status = 'COMPLETED';

-- Less optimal: filter after join
SELECT
    c.customer_name,
    o.order_id
FROM customers c
JOIN orders o
    ON c.customer_id = o.customer_id
WHERE o.order_status = 'COMPLETED';
