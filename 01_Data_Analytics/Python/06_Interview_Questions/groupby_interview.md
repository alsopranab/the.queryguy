# GroupBy Interview Questions

## Q1: What does groupby do
Aggregates data by categories.

## Q2: Revenue by region
`df.groupby("Region")["Sales"].sum()`

## Q3: Multiple aggregations
`df.groupby("Region").agg({"Sales":"sum","Orders":"count"})`
