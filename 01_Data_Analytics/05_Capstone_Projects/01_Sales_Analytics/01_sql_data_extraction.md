# SQL – Data Extraction

## Objective
Extract clean, analysis-ready data.

## Step 1: Join Required Tables
We need orders, customers, and products together.

## Core Query Logic
- Join orders with customers
- Join orders with products
- Filter last 2 years
- Select required columns only

## Example Query
```
SELECT o.order_date,
        c.region,
        p.category,
        o.revenue,
        o.discount,
        o.profit

 FROM orders o

 JOIN customers c ON o.customer_id = c.customer_id

 JOIN products p ON o.product_id = p.product_id

 WHERE o.order_date >= CURRENT_DATE - INTERVAL '2 years';
```
## Teaching Point
SQL is used to:
- Reduce data size
- Join tables
- Filter irrelevant data
