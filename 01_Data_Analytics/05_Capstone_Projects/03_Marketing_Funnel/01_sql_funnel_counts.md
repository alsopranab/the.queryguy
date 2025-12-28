# SQL – Funnel Stage Aggregation

## Objective
Count users at each funnel stage.

## Key Logic
- Group by event_type
- Count distinct users

## Example Query
`SELECT event_type,
        COUNT(DISTINCT user_id) AS users
 FROM marketing_events
 GROUP BY event_type
 ORDER BY users DESC;`

## Teaching Point
Funnels are about **unique users**, not events.
