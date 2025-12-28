# INDEX + MATCH

## What it does
Returns a value from a table based on a matching row position.

## Syntax
`=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))`

## Parameters
- `return_range` → column containing result
- `lookup_value` → value to search
- `lookup_range` → range to search in
- `0` → exact match

## Example
`=INDEX(C:C, MATCH(A2, A:A, 0))`

Returns salary from column C for the employee ID in A2.

## Advantages
- Works left or right
- Faster than VLOOKUP
- Safe if columns move

## Interview Line
INDEX + MATCH is more flexible than VLOOKUP.
