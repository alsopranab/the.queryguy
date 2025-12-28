# HLOOKUP

## What it does
Searches for a value in the **first row** of a table and returns a value from another row.

## Syntax
`=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])`

## Parameters
- `lookup_value` → value to search
- `table_array` → data range
- `row_index_num` → row number to return
- `range_lookup` → TRUE (approximate) / FALSE (exact)

## Example
`=HLOOKUP("Salary", A1:E5, 3, FALSE)`

## Reality Check
Rarely used in analytics. Mostly seen in old Excel files.
