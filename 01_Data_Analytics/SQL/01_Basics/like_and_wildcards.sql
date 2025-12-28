/*
Topic: SQL Basics
Concept: LIKE, Wildcards
Use Case: Customers whose names start with 'A'
Source: Self-curated
*/

SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_name LIKE 'A%';
