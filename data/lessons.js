window.ALL_LESSONS = [
    // --- SQL TRACK ---
    {
        id: 101,
        title: "SQL Basics: SELECT & WHERE",
        category: "SQL",
        difficulty: "Beginner",
        duration: "10 min",
        desc: "The foundation of all data work. Learn how to retrieve and filter data from a single table with confidence.",
        content: {
            theory: "Every useful SQL query starts with SELECT and often a WHERE clause. SELECT chooses which columns you want to see in the result, while FROM tells the database which table to read. WHERE then filters the rows based on conditions so you do not have to manually sift through the entire table. You can think of SELECT as choosing the 'what' and WHERE as defining the 'which rows'. Common operators in WHERE are =, <>, >, <, >=, <=, AND, OR, and LIKE for partial text matching. Together, these tools let you answer basic yet powerful questions such as: 'Show me all orders above a certain amount', or 'Find customers from a specific city'.",
            codeTitle: "Task: Find all high-value orders",
            code: `-- Select all columns, but only for orders above a threshold
SELECT *
FROM Orders
WHERE Amount > 500;`,
            output: "Returns only those rows from the Orders table where the Amount column is greater than 500, effectively listing your high-value orders and hiding small transactions.",
            playground: {
                language: "sql",
                initialCode: `-- Try changing the threshold from 500 to 300 or 800
SELECT *
FROM Orders
WHERE Amount > 500;`,
                setup: `
                    CREATE TABLE Orders (
                        OrderID INT,
                        CustomerName STRING,
                        Amount INT,
                        OrderDate DATE
                    );
                    INSERT INTO Orders VALUES
                        (1, 'Alice', 600, '2025-01-01'),
                        (2, 'Bob', 200, '2025-01-02'),
                        (3, 'Charlie', 800, '2025-01-03'),
                        (4, 'Diana', 450, '2025-01-04');
                `
            }
        },
        tags: ["SQL", "Basics", "Filtering", "SELECT", "WHERE"]
    },
    {
        id: 102,
        title: "SQL Joins: Combining Tables",
        category: "SQL",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "Master INNER, LEFT, RIGHT, and FULL joins to connect datasets and answer business questions spanning multiple tables.",
        content: {
            theory: "Real databases rarely store everything in one giant table. Instead, related information is split across tables and connected by keys such as CustomerID or ProductID. Joins let you bring these pieces back together. An INNER JOIN returns only rows where a matching key exists in both tables. A LEFT JOIN returns all rows from the left table and fills in matching data from the right table, leaving NULLs where no match exists. RIGHT and FULL joins extend this idea in the opposite or both directions. Understanding joins is critical for building reports, combining fact tables with dimensions, and answering questions like 'What is each customer's total spend?'.",
            codeTitle: "Task: Join Orders with Customers",
            code: `-- Combine orders with customer names
SELECT
    Orders.OrderID,
    Customers.CustomerName,
    Orders.Amount
FROM Orders
INNER JOIN Customers
    ON Orders.CustomerID = Customers.CustomerID;`,
            output: "Produces a result set where each row shows an OrderID, the customer name from the Customers table, and the Amount from the Orders table, but only for cases where the CustomerID exists in both tables.",
            playground: {
                language: "sql",
                initialCode: `-- Try switching INNER JOIN to LEFT JOIN and observe NULLs
SELECT
    Orders.OrderID,
    Customers.CustomerName,
    Orders.Amount
FROM Orders
INNER JOIN Customers
    ON Orders.CustomerID = Customers.CustomerID;`,
                setup: `
                    CREATE TABLE Orders (
                        OrderID INT,
                        CustomerID INT,
                        Amount INT
                    );
                    INSERT INTO Orders VALUES
                        (1, 101, 500),
                        (2, 102, 200),
                        (3, 101, 300),
                        (4, 104, 150);

                    CREATE TABLE Customers (
                        CustomerID INT,
                        CustomerName STRING
                    );
                    INSERT INTO Customers VALUES
                        (101, 'Alice'),
                        (102, 'Bob'),
                        (103, 'Charlie');
                `
            }
        },
        tags: ["SQL", "Joins", "INNER JOIN", "LEFT JOIN"]
    },
    {
        id: 103,
        title: "SQL Aggregations: GROUP BY",
        category: "SQL",
        difficulty: "Intermediate",
        duration: "15 min",
        desc: "Summarize data using SUM, AVG, COUNT, MAX, and MIN to convert raw records into meaningful metrics.",
        content: {
            theory: "GROUP BY lets you roll up many detailed rows into summary rows. Combined with aggregate functions like SUM, AVG, COUNT, MIN, and MAX, it answers questions such as 'Total spend per customer', 'Average order value per day', or 'Number of orders per product'. Without GROUP BY, aggregates are calculated over the entire table. With GROUP BY, the calculation is performed separately for each group (for example, each CustomerID). Remember that every column in the SELECT list should be either part of the GROUP BY or wrapped in an aggregate function to avoid errors.",
            codeTitle: "Task: Total Spend per Customer",
            code: `-- Summarize how much each customer has spent
SELECT
    CustomerID,
    SUM(Amount) AS TotalSpend
FROM Orders
GROUP BY CustomerID;`,
            output: "Returns one row per CustomerID with a TotalSpend value that adds up all the Amount values for that customer across all orders.",
            playground: {
                language: "sql",
                initialCode: `-- Add AVG(Amount) to see average order value per customer
SELECT
    CustomerID,
    SUM(Amount) AS TotalSpend
FROM Orders
GROUP BY CustomerID;`,
                setup: `
                    CREATE TABLE Orders (
                        OrderID INT,
                        CustomerID INT,
                        Amount INT
                    );
                    INSERT INTO Orders VALUES
                        (1, 101, 500),
                        (2, 102, 200),
                        (3, 101, 300),
                        (4, 102, 100),
                        (5, 103, 900);
                `
            }
        },
        tags: ["SQL", "Analytics", "GROUP BY", "Aggregates"]
    },
    {
        id: 104,
        title: "Window Functions: RANK & DENSE_RANK",
        category: "SQL",
        difficulty: "Advanced",
        duration: "25 min",
        desc: "Perform calculations across sets of rows related to the current row without collapsing the result set.",
        content: {
            theory: "Window functions extend aggregate-style logic across a 'window' of rows while keeping every original row visible. Unlike GROUP BY, which collapses rows into summaries, window functions add new columns containing calculations such as rankings, running totals, or moving averages. RANK assigns the same rank to tied values, leaving gaps (1, 2, 2, 4), while DENSE_RANK also handles ties but does not leave gaps (1, 2, 2, 3). These tools are essential in analytics for tasks like ranking customers by spend, finding top N per group, or calculating percentile distributions.",
            codeTitle: "Task: Rank Sales by Amount",
            code: `-- Rank each sale by amount in descending order
SELECT
    SaleID,
    Amount,
    RANK() OVER (ORDER BY Amount DESC) AS Rank,
    DENSE_RANK() OVER (ORDER BY Amount DESC) AS DenseRank
FROM Sales;`,
            output: "Adds two extra columns: Rank, which may skip numbers when there are ties, and DenseRank, which assigns consecutive rankings even when multiple rows share the same Amount.",
            playground: {
                language: "sql",
                initialCode: `-- Observe the difference between RANK and DENSE_RANK
SELECT
    SaleID,
    Amount,
    RANK() OVER (ORDER BY Amount DESC) AS Rank,
    DENSE_RANK() OVER (ORDER BY Amount DESC) AS DenseRank
FROM Sales;`,
                setup: `
                    CREATE TABLE Sales (
                        SaleID INT,
                        Amount INT
                    );
                    INSERT INTO Sales VALUES
                        (1, 1000),
                        (2, 500),
                        (3, 1000),
                        (4, 200),
                        (5, 500);
                `
            }
        },
        tags: ["SQL", "Window Functions", "RANK", "DENSE_RANK", "Analytics"]
    },
    {
        id: 105,
        title: "Common Table Expressions (CTEs)",
        category: "SQL",
        difficulty: "Advanced",
        duration: "20 min",
        desc: "Make your queries readable and modular using WITH clauses, including multi-step transformations.",
        content: {
            theory: "A Common Table Expression (CTE) is a named temporary result set defined with a WITH clause that exists only for the duration of a single statement. CTEs make complex queries easier to read and maintain by breaking them into logical steps: filter in one CTE, aggregate in another, then join them in a final SELECT. They can also be recursive, which is useful for hierarchical data like org charts or folder trees. Using CTEs often improves clarity even when performance is similar to writing one long nested query.",
            codeTitle: "Task: Filter then Aggregate using CTE",
            code: `-- Step 1: Filter to high-value orders
-- Step 2: Aggregate total high-value spend
WITH HighValueOrders AS (
    SELECT *
    FROM Orders
    WHERE Amount > 500
)
SELECT
    COUNT(*) AS HighValueOrderCount,
    SUM(Amount) AS HighValueTotal
FROM HighValueOrders;`,
            output: "First creates a logical subset HighValueOrders, then returns how many such orders exist and their total Amount, giving a quick high-level summary of important transactions.",
            playground: {
                language: "sql",
                initialCode: `WITH HighValueOrders AS (
    SELECT *
    FROM Orders
    WHERE Amount > 500
)
SELECT
    COUNT(*) AS HighValueOrderCount,
    SUM(Amount) AS HighValueTotal
FROM HighValueOrders;`,
                setup: `
                    CREATE TABLE Orders (
                        OrderID INT,
                        Amount INT
                    );
                    INSERT INTO Orders VALUES
                        (1, 600),
                        (2, 300),
                        (3, 900),
                        (4, 550);
                `
            }
        },
        tags: ["SQL", "CTE", "Readability", "Modular Queries"]
    },

    // --- PYTHON TRACK ---
    {
        id: 201,
        title: "Python Basics: Lists & Loops",
        category: "Python",
        difficulty: "Beginner",
        duration: "15 min",
        desc: "Core syntax for working with collections of values and iterating over them without any external libraries.",
        content: {
            theory: "Lists are ordered, mutable collections that can hold numbers, strings, or even other lists. They are the default way to store a sequence of values in Python. Loops, especially for-loops, let you process each element one by one, which is essential for calculations, transformations, and simple simulations. Together, lists and loops form the backbone of most beginner-friendly algorithms, from computing averages to finding minimum values or counting occurrences.",
            codeTitle: "Task: Calculate Average Sales",
            code: `# Store daily sales in a list
sales = [100, 200, 300, 400]

# Compute total and average
total = sum(sales)
average = total / len(sales)

print(f"Total: {total}")
print(f"Average: {average}")`,
            output: "Prints the total (1000) and the average sale value (250.0) based on the list of sales amounts, demonstrating how lists and basic built-in functions work together.",
            playground: {
                language: "python",
                initialCode: `sales = [100, 200, 300, 400]
total = sum(sales)
average = total / len(sales)

print("Sales:", sales)
print(f"Total: {total}")
print(f"Average: {average}")`,
                validation: ["sum", "len", "print"]
            }
        },
        tags: ["Python", "Basics", "Lists", "Loops"]
    },
    {
        id: 202,
        title: "Pandas: Reading & Inspecting Data",
        category: "Python",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "Introduction to DataFrames, head(), info(), and describe() to quickly understand new datasets.",
        content: {
            theory: "Pandas is the core library for data analysis in Python, and the DataFrame is its central table-like data structure. Before doing any complex analysis, you should get familiar with the shape and structure of your data. Functions like head() show the first few rows, info() summarizes column types and missing values, and describe() gives basic statistics such as mean, min, max, and quartiles for numeric columns. This quick inspection step helps you catch data quality issues early and decide what transformations are needed.",
            codeTitle: "Task: Load Data and Check Structure",
            code: `import pandas as pd

# Load data from a CSV file
df = pd.read_csv("data.csv")

# Inspect the first few rows
print(df.head())

# Check column types and non-null counts
print(df.info())

# Get basic statistics for numeric columns
print(df.describe())`,
            output: "Displays the first rows of the dataset, a concise summary of columns with their types and non-null counts, and descriptive statistics such as mean and standard deviation for numeric features.",
            playground: {
                language: "python",
                initialCode: `import pandas as pd

# Simulate loading data into a DataFrame
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35]
}
df = pd.DataFrame(data)

print("HEAD:")
print(df.head())

print("\\nINFO:")
print(df.info())

print("\\nDESCRIBE:")
print(df.describe())`,
                validation: ["pd.DataFrame", "head", "info", "describe"]
            }
        },
        tags: ["Python", "Pandas", "EDA", "DataFrames"]
    },
    {
        id: 203,
        title: "Pandas: Filtering & Grouping",
        category: "Python",
        difficulty: "Intermediate",
        duration: "25 min",
        desc: "Use boolean indexing and groupby() to slice data and create summarized views similar to pivot tables.",
        content: {
            theory: "Filtering in pandas is typically done with boolean conditions such as df[df['Salary'] > 60000], which returns only the rows where the condition is True. Grouping is handled by groupby(), which is similar to SQL GROUP BY: it splits the data into groups, applies an aggregation, and combines the result. This pattern lets you easily compute metrics like average salary by department, total sales by region, or count of records per category, all with a few lines of code.",
            codeTitle: "Task: Average Salary by Dept",
            code: `import pandas as pd

# Example employee dataset
data = {
    "Department": ["HR", "IT", "HR", "IT"],
    "Salary": [50000, 80000, 52000, 85000]
}
df = pd.DataFrame(data)

# Filter high-earners
high_earners = df[df["Salary"] > 60000]

# Group by department and compute mean salary
dept_avg = df.groupby("Department")["Salary"].mean()

print("High earners:")
print(high_earners)
print("\\nAverage salary by department:")
print(dept_avg)`,
            output: "Prints a filtered DataFrame of high earners (Salary > 60000), followed by a Series showing each department with its corresponding average salary, giving both granular and summarized views.",
            playground: {
                language: "python",
                initialCode: `import pandas as pd

data = {
    "Department": ["HR", "IT", "HR", "IT"],
    "Salary": [50000, 80000, 52000, 85000]
}
df = pd.DataFrame(data)

print("Average salary by department:")
print(df.groupby("Department")["Salary"].mean())`,
                validation: ["groupby", "mean"]
            }
        },
        tags: ["Python", "Pandas", "Filtering", "groupby", "Analysis"]
    },
    {
        id: 204,
        title: "Data Viz with Matplotlib",
        category: "Python",
        difficulty: "Intermediate",
        duration: "20 min",
        desc: "Create line charts, bar charts, and simple visualizations to communicate trends and comparisons.",
        content: {
            theory: "Matplotlib is the foundational plotting library in the Python ecosystem, and pyplot offers a stateful interface similar to MATLAB. Line plots show trends over continuous axes such as time, while bar charts compare categorical values like product segments or regions. Labels, titles, legends, and colors help make your charts easier to interpret. Even simple visualizations can surface patterns that are hard to see in tables of raw numbers.",
            codeTitle: "Task: Simple Line Plot",
            code: `import matplotlib.pyplot as plt

# Example time series
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y, marker="o")
plt.title("Growth Over Time")
plt.xlabel("Period")
plt.ylabel("Value")
plt.grid(True)
plt.show()`,
            output: "Opens a window (or inline plot in notebooks) showing a line chart with points connected across periods 1–4, along with a title, axis labels, and a grid for easier reading.",
            playground: {
                language: "python",
                initialCode: `import matplotlib.pyplot as plt

print("Generating plot for [1, 2, 3, 4] vs [10, 20, 25, 30]...")
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]
plt.plot(x, y, marker="o")
plt.title("Growth Over Time")
plt.xlabel("Period")
plt.ylabel("Value")
plt.grid(True)
plt.show()`,
                validation: ["plt.plot", "plt.show"]
            }
        },
        tags: ["Python", "Visualization", "Matplotlib", "Plots"]
    },
    {
        id: 205,
        title: "Intro to Scikit-Learn",
        category: "Python",
        difficulty: "Advanced",
        duration: "40 min",
        desc: "Build a simple Linear Regression model, fit it on data, and make predictions in just a few lines.",
        content: {
            theory: "Scikit-learn is a high-level library for classical machine learning tasks such as regression, classification, and clustering. A typical workflow involves preparing your feature matrix X and target vector y, splitting data into train and test sets, fitting a model on the training data, and evaluating or predicting on unseen data. LinearRegression is a good starting point for understanding supervised learning because it models a simple relationship between inputs and a continuous output.",
            codeTitle: "Task: Predict House Prices",
            code: `from sklearn.linear_model import LinearRegression

# Training data: size in 1000 sq ft vs price in $1000s
X_train = [[1], [2], [3]]
y_train = [150, 200, 250]

model = LinearRegression()
model.fit(X_train, y_train)

X_test = [[4]]
predictions = model.predict(X_test)

print("Prediction for 4k sq ft house:", predictions[0])`,
            output: "Displays a predicted price for a 4k sq ft house based on the pattern learned from the small training dataset, demonstrating the basic fit–predict cycle in scikit-learn.",
            playground: {
                language: "python",
                initialCode: `from sklearn.linear_model import LinearRegression

# Mock training data
X = [[1], [2], [3]]
y = [2, 4, 6]

model = LinearRegression()
model.fit(X, y)

print(f"Prediction for 4: {model.predict([[4]])}")`,
                validation: ["LinearRegression", "fit", "predict"]
            }
        },
        tags: ["Python", "ML", "Scikit-learn", "Regression"]
    },

    // --- BI & EXCEL TRACK ---
    {
        id: 301,
        title: "Excel: VLOOKUP vs XLOOKUP",
        category: "Excel",
        difficulty: "Beginner",
        duration: "15 min",
        desc: "Understand classic VLOOKUP and modern XLOOKUP, and why XLOOKUP is more flexible and reliable.",
        content: {
            theory: "Lookup functions pull related values from another range or table. VLOOKUP searches only from left to right in a fixed column index and is fragile if column positions change. XLOOKUP is more powerful: it can search vertically or horizontally, return multiple columns, and provides a friendly default value when no match is found. Learning XLOOKUP prepares you for more robust and maintainable spreadsheet models.",
            codeTitle: "Formula Comparison",
            code: `-- Classic VLOOKUP: must know the column index
=VLOOKUP(A2, D:E, 2, FALSE)

-- Modern XLOOKUP: explicit lookup and return ranges with default
=XLOOKUP(A2, D:D, E:E, "Not Found")`,
            output: "Both formulas attempt to return the value from the second column/range that corresponds to the lookup value in A2, but XLOOKUP is safer when columns are inserted, and cleanly returns \"Not Found\" if there is no match.",
            playground: {
                language: "excel", // Mock type for your playground
                initialCode: `=XLOOKUP("Apple", A2:A10, B2:B10, "Not Found")`,
                setup: null
            }
        },
        tags: ["Excel", "Formulas", "VLOOKUP", "XLOOKUP", "Lookup"]
    },
    {
        id: 302,
        title: "Power BI: DAX Measures",
        category: "Power BI",
        difficulty: "Intermediate",
        duration: "30 min",
        desc: "Create dynamic measures that respond to filters and slicers, and distinguish them from calculated columns.",
        content: {
            theory: "DAX (Data Analysis Expressions) is the formula language used in Power BI for defining measures and calculated columns. Measures are evaluated at query time and respect the current filter context, making them ideal for metrics like total sales, year-over-year growth, or conversion rates. Calculated columns are computed row by row during data refresh and stored in the model. Understanding this difference is key to building efficient and correct Power BI reports.",
            codeTitle: "Task: Year-over-Year Growth",
            code: `Sales YoY % =
VAR PrevSales =
    CALCULATE(
        SUM(Sales[Amount]),
        SAMEPERIODLASTYEAR('Date'[Date])
    )
RETURN
DIVIDE(SUM(Sales[Amount]) - PrevSales, PrevSales)`,
            output: "Defines a measure that computes year-over-year percentage growth in Sales[Amount] based on the current filter context, enabling visuals to display dynamic YoY metrics by month, quarter, or year.",
            playground: {
                language: "dax", // Mock type for your playground
                initialCode: `Sales YoY % =
DIVIDE(SUM(Sales[Amount]) - [PrevSales], [PrevSales])`,
                setup: null
            }
        },
        tags: ["DAX", "BI", "Measures", "Power BI"]
    },
    {
        id: 303,
        title: "Power BI: Star Schema Modeling",
        category: "Power BI",
        difficulty: "Advanced",
        duration: "35 min",
        desc: "Design efficient models using Fact and Dimension tables to improve performance and usability.",
        content: {
            theory: "A star schema organizes data into a central fact table that stores numeric measures (like sales amount or quantity), surrounded by dimension tables that store descriptive attributes (such as product, date, or customer). This layout simplifies reporting, reduces ambiguity, and aligns with how Power BI and DAX engines are optimized. Dimension tables filter and slice the fact table, enabling clear relationships and faster queries even on large datasets.",
            codeTitle: "Concept",
            code: `-- Example of star schema components
Fact Table: Sales (DateKey, ProductKey, CustomerKey, Amount)
Dim Tables:
  Products (ProductKey, ProductName, Category)
  Customers (CustomerKey, CustomerName, Region)
  Dates (DateKey, Date, Month, Year)`,
            output: "Produces a logical model where the Sales fact table is connected via single-direction relationships to multiple dimensions, forming a star shape that makes building visuals and DAX measures more intuitive.",
            playground: null
        },
        tags: ["Modeling", "BI", "Star Schema", "Data Modeling"]
    },

    // --- DATA ENGINEERING TRACK ---
    {
        id: 401,
        title: "ETL Concepts: Extract, Transform, Load",
        category: "Data Engineering",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "Understand the lifecycle of moving data from raw sources into clean, analytics-ready destinations.",
        content: {
            theory: "ETL stands for Extract, Transform, Load. Extract pulls data from source systems such as APIs, OLTP databases, or flat files. Transform cleans, validates, and reshapes data—handling missing values, standardizing formats, and applying business rules. Load writes the curated data into targets such as data warehouses or data lakes. Many modern workflows also use ELT (Extract, Load, Transform), but the core idea remains: move data reliably, consistently, and in a way that downstream analytics can trust.",
            codeTitle: "Python Airflow Task Concept",
            code: `# In tools like Airflow, ETL is modeled as a DAG
extract_task >> transform_task >> load_task`,
            output: "Represents a simple Directed Acyclic Graph (DAG) where extract_task must finish before transform_task, which then must finish before load_task, ensuring a clear and dependable data pipeline flow.",
            playground: null
        },
        tags: ["ETL", "Concepts", "Pipelines", "Airflow"]
    },
    {
        id: 402,
        title: "SQL for Data Warehousing",
        category: "Data Engineering",
        difficulty: "Intermediate",
        duration: "30 min",
        desc: "Use MERGE statements for upserts and handle Slowly Changing Dimensions (SCD Type 2) to track history.",
        content: {
            theory: "Data warehouses often need to integrate new and changed records from source systems on a regular schedule. MERGE statements support 'upsert' patterns—updating existing rows when keys match and inserting new rows when they do not. For Slowly Changing Dimensions (SCD), especially Type 2, changes in attributes are tracked by creating a new row with a new validity range instead of overwriting the old value. This allows analysts to see what the dimension looked like at any point in time.",
            codeTitle: "Task: Upsert Data (Merge)",
            code: `-- Basic merge pattern for upserting records
MERGE INTO Target T
USING Source S
    ON T.ID = S.ID
WHEN MATCHED THEN
    UPDATE SET T.Val = S.Val
WHEN NOT MATCHED THEN
    INSERT (ID, Val)
    VALUES (S.ID, S.Val);`,
            output: "Updates rows in Target where matching IDs exist in Source, and inserts new rows for IDs that appear only in Source, keeping the warehouse table synchronized with incoming data.",
            playground: {
                language: "sql",
                initialCode: `MERGE INTO Target T
USING Source S
    ON T.ID = S.ID
WHEN MATCHED THEN
    UPDATE SET T.Val = S.Val
WHEN NOT MATCHED THEN
    INSERT (ID, Val)
    VALUES (S.ID, S.Val);`,
                setup: `
                    CREATE TABLE Target (ID INT, Val STRING);
                    INSERT INTO Target VALUES (1, 'Old');

                    CREATE TABLE Source (ID INT, Val STRING);
                    INSERT INTO Source VALUES (1, 'New'), (2, 'Fresh');
                `
            }
        },
        tags: ["SQL", "Warehousing", "MERGE", "SCD"]
    }
];
