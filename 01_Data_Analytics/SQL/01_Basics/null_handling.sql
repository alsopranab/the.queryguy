/*
Topic: SQL Basics
Concept: IS NULL, COALESCE
Use Case: Handle missing email IDs
Source: Self-curated
*/

SELECT
    customer_id,
    customer_name,
    COALESCE(email, 'Not Provided') AS email_status
FROM customers
WHERE email IS NULL;
