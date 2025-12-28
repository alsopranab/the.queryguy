# Data Validation

## Value Checks
`df[df["Sales"] < 0]`

## Range Validation
`df[(df["Discount"] < 0) | (df["Discount"] > 1)]`

## Business Use
Catch data entry or system errors.
