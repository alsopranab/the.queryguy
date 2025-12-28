# VLOOKUP

## What it does
Searches for a value in the **first column** of a table and returns a value from another column in the same row.

## Syntax
`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`

## Parameters
- `lookup_value` → value to search (e.g., Employee ID)
- `table_array` → table range containing data
- `col_index_num` → column number to return (starts from 1)
- `range_lookup`
  - `FALSE` → exact match (recommended)
  - `TRUE` → approximate match

## Example
`=VLOOKUP(A2, A:D, 3, FALSE)`

Finds value in column A and returns value from column C.

## Limitations
- Only works left → right
- Breaks if columns are inserted
- Slower on large datasets

## Interview Note
VLOOKUP is **legacy**. Know it, but do not recommend it.
