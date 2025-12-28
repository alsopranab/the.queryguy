# Lookup with Error Handling

## What it does
Prevents #N/A or #VALUE errors in reports.

## Syntax
`=IFERROR(value, value_if_error)`

## Example
`=IFERROR(XLOOKUP(A2, A:A, C:C), "Not Found")`

## Business Use
Clean dashboards and stakeholder-ready reports.

## Interview Tip
IFERROR + LOOKUP is extremely common in real work.
