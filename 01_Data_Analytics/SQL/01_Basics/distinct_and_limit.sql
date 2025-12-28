/*
Topic: SQL Basics
Concept: DISTINCT, LIMIT
Use Case: Get unique cities where customers are located
Source: Self-curated
*/

SELECT DISTINCT
    city
FROM customers
LIMIT 10;
