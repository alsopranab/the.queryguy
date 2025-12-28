# Sorting & Filtering

## Sort Values
`df.sort_values("Sales", ascending=False)`

## Filter Rows
`df[df["Region"] == "North"]`

## Combine Conditions
`df[(df["Region"]=="North") & (df["Sales"]>1000)]`

## Business Use
Top performers, region-wise analysis.
