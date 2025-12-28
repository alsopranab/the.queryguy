# Python – Funnel Conversion Analysis

## Step 1: Load Data
`df = pd.read_csv("marketing_events.csv")`

## Step 2: Pivot Funnel Stages
`funnel = df.groupby("event_type")["user_id"].nunique()`

## Step 3: Conversion Rates
`conversion_rate = funnel / funnel.max()`

## Step 4: Channel Performance
`df.groupby("channel")["user_id"].nunique()`

## Key Insight
Major drop-off happens between Sign-up and Purchase.

## Teaching Point
Conversion rate tells efficiency, not volume.
