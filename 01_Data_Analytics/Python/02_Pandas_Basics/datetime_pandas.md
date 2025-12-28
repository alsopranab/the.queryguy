# Datetime in Pandas

## Convert to Datetime
`df["order_date"] = pd.to_datetime(df["order_date"])`

## Extract Year / Month
`df["year"] = df["order_date"].dt.year`  
`df["month"] = df["order_date"].dt.month`

## Business Use
Time-based trend analysis.
