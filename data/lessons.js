window.ALL_LESSONS = [
    // --- SQL TRACK ---
    {
        id: 101,
        title: "SQL Basics: SELECT & WHERE",
        category: "SQL",
        difficulty: "Beginner",
        duration: "10 min",
        desc: "The foundation of all data work. Learn how to retrieve and filter data.",
        content: {
            theory: "SELECT chooses the columns you want to see. WHERE filters the rows based on conditions.",
            codeTitle: "Task: Find all high-value orders",
            code: "SELECT * FROM Orders WHERE Amount > 500;",
            output: "Shows orders with Amount greater than 500.",
            playground: {
                language: "sql",
                initialCode: "SELECT * FROM Orders WHERE Amount > 500;",
                setup: `
                    CREATE TABLE Orders (OrderID INT, CustomerName STRING, Amount INT, OrderDate DATE);
                    INSERT INTO Orders VALUES (1, 'Alice', 600, '2025-01-01'), (2, 'Bob', 200, '2025-01-02'), (3, 'Charlie', 800, '2025-01-03');
                `
            }
        },
        tags: ["SQL", "Basics"]
    },
    {
        id: 102,
        title: "SQL Joins: Combining Tables",
        category: "SQL",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "Master INNER, LEFT, RIGHT, and FULL joins to connect datasets.",
        content: {
            theory: "Joins link tables using a common key. INNER JOIN returns only matches; LEFT JOIN returns all left table rows plus matches.",
            codeTitle: "Task: Join Orders with Customers",
            code: `SELECT Orders.OrderID, Customers.CustomerName, Orders.Amount 
FROM Orders 
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
            output: "A combined table showing order details along with customer names.",
            playground: {
                language: "sql",
                initialCode: `SELECT Orders.OrderID, Customers.CustomerName, Orders.Amount 
FROM Orders 
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
                setup: `
                    CREATE TABLE Orders (OrderID INT, CustomerID INT, Amount INT);
                    INSERT INTO Orders VALUES (1, 101, 500), (2, 102, 200), (3, 101, 300);
                    CREATE TABLE Customers (CustomerID INT, CustomerName STRING);
                    INSERT INTO Customers VALUES (101, 'Alice'), (102, 'Bob'), (103, 'Charlie');
                `
            }
        },
        tags: ["SQL", "Joins"]
    },
    {
        id: 103,
        title: "SQL Aggregations: GROUP BY",
        category: "SQL",
        difficulty: "Intermediate",
        duration: "15 min",
        desc: "Summarize data using SUM, AVG, COUNT, MAX, and MIN.",
        content: {
            theory: "GROUP BY groups rows that have the same values into summary rows. Often used with aggregate functions.",
            codeTitle: "Task: Total Spend per Customer",
            code: `SELECT CustomerID, SUM(Amount) as TotalSpend 
FROM Orders 
GROUP BY CustomerID;`,
            output: "Shows unique CustomerIDs and their total calculated spend.",
            playground: {
                language: "sql",
                initialCode: `SELECT CustomerID, SUM(Amount) as TotalSpend 
FROM Orders 
GROUP BY CustomerID;`,
                setup: `
                    CREATE TABLE Orders (OrderID INT, CustomerID INT, Amount INT);
                    INSERT INTO Orders VALUES (1, 101, 500), (2, 102, 200), (3, 101, 300), (4, 102, 100);
                `
            }
        },
        tags: ["SQL", "Analytics"]
    },
     {
        id: 104,
        title: "Window Functions: RANK & DENSE_RANK",
        category: "SQL",
        difficulty: "Advanced",
        duration: "25 min",
        desc: "Perform calculations across a set of table rows that are related to the current row.",
        content: {
            theory: "Window functions don't collapse rows like GROUP BY. They add a new column with the calculation context.",
            codeTitle: "Task: Rank Sales by Amount",
            code: `SELECT SaleID, Amount, 
RANK() OVER (ORDER BY Amount DESC) as Rank 
FROM Sales;`,
            output: "Assigns a rank (1, 2, 3...) based on the Amount value descending.",
            playground: {
                language: "sql",
                initialCode: `SELECT SaleID, Amount, 
RANK() OVER (ORDER BY Amount DESC) as Rank 
FROM Sales;`,
                setup: `
                    CREATE TABLE Sales (SaleID INT, Amount INT);
                    INSERT INTO Sales VALUES (1, 1000), (2, 500), (3, 1000), (4, 200);
                `
            }
        },
        tags: ["SQL", "Window Functions"]
    },
    {
        id: 105,
        title: "Common Table Expressions (CTEs)",
        category: "SQL",
        difficulty: "Advanced",
        duration: "20 min",
        desc: "Make your queries readable and modular using WITH clauses.",
        content: {
            theory: "A CTE is a temporary result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement.",
            codeTitle: "Task: Filter then Join using CTE",
            code: `WITH HighValueOrders AS (
    SELECT * FROM Orders WHERE Amount > 500
)
SELECT * FROM HighValueOrders;`,
            output: "Results from the defined CTE context.",
            playground: {
                language: "sql",
                initialCode: `WITH HighValueOrders AS (
    SELECT * FROM Orders WHERE Amount > 500
)
SELECT * FROM HighValueOrders;`,
                setup: `
                    CREATE TABLE Orders (OrderID INT, Amount INT);
                    INSERT INTO Orders VALUES (1, 600), (2, 300), (3, 900);
                `
            }
        },
        tags: ["SQL", "CTE"]
    },

    // --- PYTHON TRACK ---
    {
        id: 201,
        title: "Python Basics: Lists & Loops",
        category: "Python",
        difficulty: "Beginner",
        duration: "15 min",
        desc: "Core syntax for data manipulation without libraries.",
        content: {
            theory: "Lists store multiple items. Loops iterate over them to perform actions.",
            codeTitle: "Task: Calculate Average Sales",
            code: `sales = [100, 200, 300, 400]
total = sum(sales)
average = total / len(sales)
print(f"Average: {average}")`,
            output: "Average: 250.0",
            playground: {
                language: "python",
                initialCode: `sales = [100, 200, 300, 400]
total = sum(sales)
average = total / len(sales)
print(f"Average: {average}")`,
                validation: ["sum", "len", "print"]
            }
        },
        tags: ["Python", "Basics"]
    },
    {
        id: 202,
        title: "Pandas: Reading & Inspecting Data",
        category: "Python",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "Introduction to DataFrames, head(), info(), and describe().",
        content: {
            theory: "Pandas is the powerhouse of data analysis. DataFrames are table-like structures.",
            codeTitle: "Task: Load CSV and Check Info",
            code: `import pandas as pd
df = pd.read_csv('data.csv')
print(df.head())
print(df.info())`,
            output: "Displays first 5 rows and column data types.",
            playground: {
                language: "python",
                initialCode: `import pandas as pd
# Simulate loading data
data = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}
df = pd.DataFrame(data)
print(df.head())`,
                validation: ["pd.DataFrame", "head"]
            }
        },
        tags: ["Python", "Pandas"]
    },
    {
        id: 203,
        title: "Pandas: Filtering & Grouping",
        category: "Python",
        difficulty: "Intermediate",
        duration: "25 min",
        desc: "Slicing data and creating pivot-table style summaries.",
        content: {
            theory: "Use boolean indexing for filtering and groupby() for aggregation.",
            codeTitle: "Task: Average Salary by Dept",
            code: `dept_avg = df.groupby('Department')['Salary'].mean()
print(dept_avg)`,
            output: "Series with Department as index and mean Salary as value.",
            playground: {
                language: "python",
                initialCode: `import pandas as pd
data = {'Department': ['HR', 'IT', 'HR', 'IT'], 'Salary': [50000, 80000, 52000, 85000]}
df = pd.DataFrame(data)
print(df.groupby('Department')['Salary'].mean())`,
                validation: ["groupby", "mean"]
            }
        },
        tags: ["Python", "Analysis"]
    },
    {
        id: 204,
        title: "Data Viz with Matplotlib",
        category: "Python",
        difficulty: "Intermediate",
        duration: "20 min",
        desc: "Creating line charts, bar charts, and histograms.",
        content: {
            theory: "Matplotlib is the foundation of Python plotting. Pyplot gives a MATLAB-like interface.",
            codeTitle: "Task: Simple Line Plot",
            code: `import matplotlib.pyplot as plt
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]
plt.plot(x, y)
plt.title("Growth Over Time")
plt.show()`,
            output: "(Visual Chart Generated)",
            playground: {
                language: "python",
                initialCode: `import matplotlib.pyplot as plt
# Simulation of plotting
print("Generating plot for [1,2,3,4] vs [10,20,25,30]...")
plt.plot([1,2,3,4], [10,20,25,30])
plt.show()`,
                validation: ["plt.plot", "plt.show"]
            }
        },
        tags: ["Python", "Visualization"]
    },
    {
        id: 205,
        title: "Intro to Scikit-Learn",
        category: "Python",
        difficulty: "Advanced",
        duration: "40 min",
        desc: "Building a simple Linear Regression model.",
        content: {
            theory: "Scikit-learn provides simple tools for data mining and data analysis. We fit a model to data and then predict.",
            codeTitle: "Task: Predict House Prices",
            code: `from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`,
            output: "Array of predicted values.",
            playground: {
                language: "python",
                initialCode: `from sklearn.linear_model import LinearRegression
# Mock data
X = [[1], [2], [3]]
y = [2, 4, 6]
model = LinearRegression()
model.fit(X, y)
print(f"Prediction for 4: {model.predict([[4]])}")`,
                validation: ["LinearRegression", "fit", "predict"]
            }
        },
        tags: ["Python", "ML"]
    },

    // --- BI & EXCEL TRACK ---
    {
        id: 301,
        title: "Excel: VLOOKUP vs XLOOKUP",
        category: "Excel",
        difficulty: "Beginner",
        duration: "15 min",
        desc: "The battle of the lookups. Why you should upgrade.",
        content: {
            theory: "XLOOKUP searches any direction and defaults gracefully. VLOOKUP is strictly left-to-right.",
            codeTitle: "Formula Comparison",
            code: `VLOOKUP: =VLOOKUP(A2, D:E, 2, FALSE)
XLOOKUP: =XLOOKUP(A2, D:D, E:E, "Not Found")`,
            output: "Returns matching value from the target array.",
             playground: {
                language: "excel", // Mock type
                initialCode: `=XLOOKUP("Apple", A2:A10, B2:B10)`,
                setup: null
            }
        },
        tags: ["Excel", "Formulas"]
    },
    {
        id: 302,
        title: "Power BI: DAX Measures",
        category: "Power BI",
        difficulty: "Intermediate",
        duration: "30 min",
        desc: "Creating calculated measures vs calculated columns.",
        content: {
            theory: "Measures are calculated on the fly based on filter context (slicers). Columns are static.",
            codeTitle: "Task: Year-over-Year Growth",
            code: `Sales YoY % = 
VAR PrevSales = CALCULATE(SUM(Sales[Amount]), SAMEPERIODLASTYEAR('Date'[Date]))
RETURN
DIVIDE(SUM(Sales[Amount]) - PrevSales, PrevSales)`,
            output: "Percentage growth value.",
             playground: {
                language: "dax", // Mock type
                initialCode: `Sales YoY % = DIVIDE(SUM(Sales[Amount]) - [PrevSales], [PrevSales])`,
                setup: null
            }
        },
        tags: ["DAX", "BI"]
    },
    {
        id: 303,
        title: "Power BI: Star Schema Modeling",
        category: "Power BI",
        difficulty: "Advanced",
        duration: "35 min",
        desc: "Designing efficient data models with Fact and Dimension tables.",
        content: {
            theory: "Star schema puts numerical data in a central Fact table and descriptive data in surrounding Dimension tables.",
            codeTitle: "Concept",
            code: `Fact Table: Sales (DateKey, ProductKey, Amount)
Dim Tables: Products (ProductKey, Name), Dates (DateKey, Month, Year)`,
            output: "Optimized relationship diagram.",
             playground: null
        },
        tags: ["Modeling", "BI"]
    },

    // --- DATA ENGINEERING TRACK ---
    {
        id: 401,
        title: "ETL Concepts: Extract, Transform, Load",
        category: "Data Engineering",
        difficulty: "Beginner",
        duration: "20 min",
        desc: "The lifecycle of data movement.",
        content: {
            theory: "ETL moves data from sources (APIs, DBs) to destinations (Warehouses), cleaning it along the way.",
            codeTitle: "Python Airflow Task Concept",
            code: `extract_task >> transform_task >> load_task`,
            output: "Directed Acyclic Graph (DAG) execution.",
             playground: null
        },
        tags: ["ETL", "Concepts"]
    },
    {
        id: 402,
        title: "SQL for Data Warehousing",
        category: "Data Engineering",
        difficulty: "Intermediate",
        duration: "30 min",
        desc: "Using MERGE statements and handling Slowly Changing Dimensions (SCD).",
        content: {
            theory: "Warehouses need to track history. SCD Type 2 keeps history by adding new rows for changes.",
            codeTitle: "Task: Upsert Data (Merge)",
            code: `MERGE INTO Target T
USING Source S ON T.ID = S.ID
WHEN MATCHED THEN UPDATE SET T.Val = S.Val
WHEN NOT MATCHED THEN INSERT (ID, Val) VALUES (S.ID, S.Val);`,
            output: "Updates existing records, inserts new ones.",
             playground: {
                language: "sql",
                initialCode: `MERGE INTO Target T
USING Source S ON T.ID = S.ID
WHEN MATCHED THEN UPDATE SET T.Val = S.Val
WHEN NOT MATCHED THEN INSERT (ID, Val) VALUES (S.ID, S.Val);`,
                setup: `
                    CREATE TABLE Target (ID INT, Val STRING);
                    INSERT INTO Target VALUES (1, 'Old');
                    CREATE TABLE Source (ID INT, Val STRING);
                    INSERT INTO Source VALUES (1, 'New'), (2, 'Fresh');
                `
            }
        },
        tags: ["SQL", "Warehousing"]
    }
];
