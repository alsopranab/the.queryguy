# GroupBy Basics

## What it does
Aggregates data by category.

## Syntax
`df.groupby("Region")["Sales"].sum()`

## Multiple Aggregations
`df.groupby("Region").agg({"Sales":"sum","Orders":"count"})`

## Interview Tip
GroupBy is SQL GROUP BY in Python.
