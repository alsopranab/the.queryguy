# Discount Impact Analysis

## Business Question
Do discounts increase sales volume?

## Steps
- Compare discounted vs non-discounted orders
- Analyze average order value

## Key Operations
`df.groupby("Discount_Applied")["Sales"].mean()`

## Insight Example
Discounts increase volume but reduce average order value.

## Interview Angle
Discuss margin vs volume tradeoff.
