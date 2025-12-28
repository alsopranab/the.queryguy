# Customer Segmentation

## Business Question
Can customers be grouped based on spending behavior?

## Steps
- Calculate total spend per customer
- Categorize customers
- Analyze segment contribution

## Key Operations
`df.groupby("Customer_ID")["Sales"].sum()`  
`df["Segment"] = df["Sales"].apply(lambda x: "High" if x>100000 else "Low")`

## Insight Example
20% customers generate 70% of revenue.

## Interview Angle
Mention Pareto principle (80/20 rule).
