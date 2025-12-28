# Data Type Conversion

## Check Data Types
`df.dtypes`

## Convert Column Type
`df["Sales"] = df["Sales"].astype(float)`

## Convert Dates
`df["order_date"] = pd.to_datetime(df["order_date"])`

## Interview Note
Wrong data types cause calculation errors.
