# Encoding Categorical Variables

## Label Encoding
`df["Region_Code"] = df["Region"].astype("category").cat.codes`

## One-Hot Encoding
`pd.get_dummies(df, columns=["Region"])`

## Interview Tip
Encoding is required before ML models.
