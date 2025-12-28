/*
Interview Question: Swap gender values (M ↔ F)
Concepts: CASE WHEN
*/

UPDATE users
SET gender = CASE
    WHEN gender = 'M' THEN 'F'
    WHEN gender = 'F' THEN 'M'
    ELSE gender
END;
