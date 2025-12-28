# Outlier Handling

## Identify Outliers (IQR)
`Q1 = df["Sales"].quantile(0.25)`  
`Q3 = df["Sales"].quantile(0.75)`  
`IQR = Q3 - Q1`

## Filter Outliers
`df = df[(df["Sales"] >= Q1 - 1.5*IQR) & (df["Sales"] <= Q3 + 1.5*IQR)]`

## Interview Tip
Always justify outlier removal.
