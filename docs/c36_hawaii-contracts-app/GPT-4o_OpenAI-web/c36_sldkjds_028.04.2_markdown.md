## Assistant Message Response No. 28.4

Sure! Here are the totals by category, and I'll provide code to generate a chart.

**Totals by Category:**
- **Goods and Services**: $2,602,606.97
- **Construction**: $5,999,231.26
- **Professional Services**: $4,046,650.85
- **Services**: $2,179,194.69
- **Health and Human Services**: $0.00

Here's a Python code snippet using `matplotlib` to generate a chart for these totals:

```python
import matplotlib.pyplot as plt

# Data
categories = ['Goods and Services', 'Construction', 'Professional Services', 'Services', 'Health and Human Services']
totals = [2602606.97, 5999231.26, 4046650.85, 2179194.69, 0.00]

# Creating the bar chart
plt.figure(figsize=(10, 6))
plt.bar(categories, totals, color=['blue', 'green', 'red', 'purple', 'orange'])
plt.xlabel('Category')
plt.ylabel('Total Award Amount ($)')
plt.title('Total Award Amount by Category')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()

# Adding the value labels on the bars
for index, value in enumerate(totals):
    plt.text(index, value + 100000, f\"${value:,.2f}\", ha='center', va='bottom')

# Show the plot
plt.show()
```

This code will produce a bar chart displaying the total award amounts for each category. Ensure you have `matplotlib` installed in your Python environment if you run this code:

```sh
pip install matplotlib
```

You can run the provided code in a Python environment to generate the bar chart.