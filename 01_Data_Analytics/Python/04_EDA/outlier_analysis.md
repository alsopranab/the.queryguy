# Outlier Analysis

## What it does
Identifies unusual data points.

## Example
`df["Sales"].quantile([0.01, 0.99])`

## Interview Tip
Outliers may represent fraud or special events.
