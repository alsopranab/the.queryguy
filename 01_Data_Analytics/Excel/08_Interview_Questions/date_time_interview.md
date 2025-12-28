# Date & Time Interview Questions

## Q1: Calculate days between two dates
`=DATEDIF(A2,B2,"D")`

## Q2: Check if date is expired
`=IF(A2<TODAY(),"Expired","Active")`

## Q3: Get last day of month
`=EOMONTH(A2,0)`

## Interview Note
DATEDIF is commonly asked despite being undocumented.
