# Churn Risk Identification

## Business Question
Which customers are at risk of churn?

## Steps
- Identify last purchase date
- Calculate inactivity period
- Flag inactive customers

## Key Operations
`df["Days_Inactive"] = (today - df["Last_Order_Date"]).dt.days`  
`df[df["Days_Inactive"] > 90]`

## Insight Example
Customers inactive for 90+ days show high churn risk.

## Interview Angle
Link insights to retention strategy.
