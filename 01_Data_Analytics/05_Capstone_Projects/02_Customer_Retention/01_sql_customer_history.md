# SQL – Customer Order History

## Objective
Understand how often customers return.

## Key Logic
- Count orders per customer
- Find first and last order date

## Example Query
`SELECT customer_id,
        COUNT(order_id) AS order_count,
        MIN(order_date) AS first_order,
        MAX(order_date) AS last_order
 FROM orders
 GROUP BY customer_id;`

## Teaching Point
Retention starts with **order frequency**.
