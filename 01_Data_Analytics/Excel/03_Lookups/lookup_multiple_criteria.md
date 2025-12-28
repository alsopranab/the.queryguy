# Lookup with Multiple Criteria

## What it does
Returns a value based on **more than one condition**.

## Syntax
`=INDEX(return_range, MATCH(1, (range1=value1)*(range2=value2), 0))`

## Example
`=INDEX(D:D, MATCH(1, (A:A=G1)*(B:B=G2), 0))`

Returns salary where:
- Employee ID = G1
- Department = G2

## Important
Older Excel requires Ctrl + Shift + Enter.
