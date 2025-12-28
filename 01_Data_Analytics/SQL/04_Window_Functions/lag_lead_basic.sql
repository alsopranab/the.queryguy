/*
Topic: Window Functions
Concept: LAG, LEAD
Use Case: Compare current month sales with previous and next month
Source: Self-curated
*/

SELECT
    month,
    sales_amount,
    LAG(sales_amount) OVER (ORDER BY month) AS prev_month_sales,
    LEAD(sales_amount) OVER (ORDER BY month) AS next_month_sales
FROM monthly_sales;
