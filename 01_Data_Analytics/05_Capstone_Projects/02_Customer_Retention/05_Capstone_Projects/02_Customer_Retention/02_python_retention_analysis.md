# Python – Retention Analysis

## Step 1: Load Data
`df = pd.read_csv("customer_orders.csv")`

## Step 2: Identify Repeat Customers
`df[df["order_count"] > 1]`

## Step 3: Calculate Retention Rate
`retention_rate = repeat_customers / total_customers`

## Step 4: Identify Inactive Customers
`df["days_inactive"] = (today - df["last_order"]).dt.days`

`df[df["days_inactive"] > 90]`

## Key Insight
Large portion of customers stop ordering after first purchase.

## Teaching Point
Retention is about **behavior over time**, not revenue.
