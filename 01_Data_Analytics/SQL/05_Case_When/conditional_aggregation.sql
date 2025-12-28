/*
Topic: CASE WHEN
Concept: Conditional Aggregation
Use Case: Count orders by status
Source: Self-curated
*/

SELECT
    COUNT(CASE WHEN order_status = 'COMPLETED' THEN 1 END) AS completed_orders,
    COUNT(CASE WHEN order_status = 'CANCELLED' THEN 1 END) AS cancelled_orders,
    COUNT(CASE WHEN order_status = 'PENDING' THEN 1 END) AS pending_orders
FROM orders;
