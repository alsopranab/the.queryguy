# String Cleaning

## Remove Extra Spaces
`df["customer_name"] = df["customer_name"].str.strip()`

## Change Case
`df["city"] = df["city"].str.lower()`

## Replace Values
`df["status"] = df["status"].str.replace("Pending","P")`

## Business Use
Standardize categorical data.
