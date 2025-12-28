# Product Performance Analysis

## Business Question
Which products drive revenue and which underperform?

## Steps
- Aggregate revenue by product
- Rank products
- Identify top and bottom performers

## Key Operations
`df.groupby("Product")["Sales"].sum().sort_values(ascending=False)`

## Insight Example
Top 5 products contribute majority of revenue.

## Interview Angle
Talk about inventory optimization.
