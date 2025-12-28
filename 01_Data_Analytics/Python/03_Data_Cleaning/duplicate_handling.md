# Handling Duplicates

## Check Duplicates
`df.duplicated()`

## Remove Duplicates
`df.drop_duplicates()`

## Remove Based on Column
`df.drop_duplicates(subset=["customer_id"])`

## Business Use
Avoid double-counting revenue or users.
