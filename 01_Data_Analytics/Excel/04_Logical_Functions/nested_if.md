# Nested IF

## What it does
Evaluates multiple conditions using multiple IF statements.

## Syntax
`=IF(condition1, result1, IF(condition2, result2, result3))`

## Example
`=IF(A2>=100000, "High", IF(A2>=50000, "Medium", "Low"))`

## Business Use
Grading systems, tier classification.

## Interview Tip
For many conditions, prefer IFS.
