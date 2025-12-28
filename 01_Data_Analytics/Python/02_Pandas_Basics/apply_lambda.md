# apply() & lambda

## apply()
Used for row or column operations.

## Example
`df["Category"] = df["Sales"].apply(lambda x: "High" if x>1000 else "Low")`

## Interview Note
Prefer vectorized ops, use apply when needed.
