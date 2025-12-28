# Logical Function Interview Questions

## Q1: Categorize sales into High / Medium / Low
`=IF(A2>=100000,"High",IF(A2>=50000,"Medium","Low"))`

## Q2: Same logic using IFS
`=IFS(A2>=100000,"High",A2>=50000,"Medium",A2<50000,"Low")`

## Q3: Eligibility check
`=IF(AND(A2>=50000,B2="Yes"),"Eligible","Not Eligible")`
