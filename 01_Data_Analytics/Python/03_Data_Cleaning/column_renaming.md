# Renaming Columns

## Rename Single Column
`df.rename(columns={"old_name":"new_name"}, inplace=True)`

## Rename All Columns
`df.columns = df.columns.str.lower().str.replace(" ","_")`

## Business Use
Clean, consistent column names.
