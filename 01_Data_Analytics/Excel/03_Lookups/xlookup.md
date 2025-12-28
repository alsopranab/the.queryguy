# XLOOKUP

## What it does
Modern replacement for VLOOKUP, HLOOKUP, and INDEX + MATCH.

## Syntax
`=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])`

## Parameters
- `lookup_value` → value to search
- `lookup_array` → range to search in
- `return_array` → range to return value from
- `if_not_found` → optional fallback value

## Example
`=XLOOKUP(A2, A:A, C:C, "Not Found")`

## Why it’s better
- No column index numbers
- Cleaner syntax
- Built-in error handling

## Interview Tip
If available, always prefer XLOOKUP.
