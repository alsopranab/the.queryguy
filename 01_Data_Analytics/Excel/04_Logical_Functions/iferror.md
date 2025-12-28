# IFERROR

## What it does
Handles errors and returns a fallback value.

## Syntax
`=IFERROR(value, value_if_error)`

## Example
`=IFERROR(XLOOKUP(A2, A:A, C:C), "Not Found")`

## Business Use
Prevents broken dashboards.

## Interview Tip
IFERROR is essential in production Excel files.
