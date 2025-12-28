# Handling Missing Values

## Why it matters
Missing data can break analysis and models.

## Detect Missing Values
`df.isnull()`  
`df.isnull().sum()`

## Drop Missing Values
`df.dropna()`  
`df.dropna(subset=["Sales"])`

## Fill Missing Values
`df.fillna(0)`  
`df["Sales"].fillna(df["Sales"].mean(), inplace=True)`

## Interview Tip
Always explain why you drop or fill missing values.
