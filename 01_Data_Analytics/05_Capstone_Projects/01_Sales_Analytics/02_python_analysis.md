# Python – Cleaning & Analysis

## Step 1: Load Data
`df = pd.read_csv("sales_data.csv")`

## Step 2: Basic Checks
`df.shape`  
`df.info()`

## Step 3: Handle Missing Values
`df.isnull().sum()`  
`df.fillna(0, inplace=True)`

## Step 4: Revenue by Region
`df.groupby("region")["revenue"].sum()`

## Step 5: Profit Volatility
`df.groupby("region")["profit"].std()`

## Key Insight
High revenue regions may still have unstable profit.

## Teaching Point
Python is best for:
- Data cleaning
- Complex logic
- Exploration
