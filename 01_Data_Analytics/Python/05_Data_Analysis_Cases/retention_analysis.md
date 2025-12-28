# Customer Retention Analysis

## Business Question
How many customers are repeat buyers?

## Steps
- Count orders per customer
- Classify new vs returning customers

## Key Operations
`df.groupby("Customer_ID")["Order_ID"].count()`  
`df[df["Order_Count"] > 1]`

## Insight Example
Retention rate is low, indicating acquisition-heavy growth.

## Interview Angle
Suggest loyalty programs or re-engagement campaigns.
