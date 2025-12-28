# Excel Scenario-Based Questions

## Scenario 1: Remove errors from lookup
`=IFERROR(VLOOKUP(A2,A:D,3,FALSE),"NA")`

## Scenario 2: Highlight high-value customers
`=IF(A2>=100000,"High Value","")`

## Scenario 3: Calculate working days
`=NETWORKDAYS(A2,B2)`
