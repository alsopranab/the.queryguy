# Python Scenario-Based Questions

## Scenario 1
Categorize sales as High or Low  
`df["Category"] = df["Sales"].apply(lambda x: "High" if x>1000 else "Low")`

## Scenario 2
Find top 5 products  
`df.groupby("Product")["Sales"].sum().sort_values(ascending=False).head(5)`

## Scenario 3
Find inactive customers  
Filter using last purchase date.
