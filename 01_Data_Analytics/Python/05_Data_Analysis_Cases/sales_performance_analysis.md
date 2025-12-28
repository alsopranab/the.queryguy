# Sales Performance Analysis

## Business Question
How is sales performing across regions and time?

## Steps
- Load sales data
- Clean missing values
- Aggregate sales by region and month
- Identify top and bottom regions

## Key Operations
`df.groupby("Region")["Sales"].sum()`  
`df.groupby("Month")["Sales"].sum()`

## Insight Example
North region contributes highest revenue, but growth is slowing.

## Interview Angle
Explain how insights would impact sales strategy.
