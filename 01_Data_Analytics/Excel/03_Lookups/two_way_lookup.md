# Two-Way Lookup (Row + Column)

## What it does
Finds a value at the intersection of a row and a column.

## Syntax
`=INDEX(data_range, MATCH(row_value, row_range, 0), MATCH(column_value, column_range, 0))`

## Example
`=INDEX(B2:E10, MATCH(A12, A2:A10, 0), MATCH(B12, B1:E1, 0))`

## Use Case
Dashboards with Product × Month metrics.
