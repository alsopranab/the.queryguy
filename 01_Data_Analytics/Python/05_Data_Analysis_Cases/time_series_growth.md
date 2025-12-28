# Time Series Growth Analysis

## Business Question
Is the business growing over time?

## Steps
- Aggregate sales by month
- Calculate month-over-month growth

## Key Operations
`df.groupby("Month")["Sales"].sum()`  
`df["MoM_Growth"] = df["Sales"].pct_change()`

## Insight Example
Growth is positive but volatile.

## Interview Angle
Explain seasonality and external factors.
