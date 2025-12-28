/*
Topic: Performance Tuning
Concept: Avoid SELECT *
Use Case: Reduce data scan
Source: Self-curated
*/

-- Good practice
SELECT
    order_id,
    order_amount
FROM orders;

-- Bad practice
SELECT *
FROM orders;
