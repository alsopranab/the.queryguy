# Lookup Interview Questions

## Q1: Why INDEX + MATCH over VLOOKUP
- Works left and right
- Faster
- Column-safe

## Q2: Write a lookup with error handling
`=IFERROR(XLOOKUP(A2, A:A, C:C), "Not Found")`

## Q3: Lookup using two conditions
`=INDEX(D:D, MATCH(1, (A:A=G1)*(B:B=G2), 0))`

## Interview Tip
Mention XLOOKUP if Excel version supports it.
