/*
Topic: Real World Analytics
Use Case: Funnel analysis
Business Question: Where are users dropping off?
Source: Self-curated
*/

SELECT
    stage,
    COUNT(DISTINCT user_id) AS users
FROM user_funnel
GROUP BY stage
ORDER BY users DESC;
