import matplotlib.pyplot as plt
import numpy as np

# Data
categories = ['Construction', 'Goods and Services', 'Professional Services',
              'Services', 'Goods & Services', 'Health and Human Services']
values = [3232715.12, 2058392.06, 3021446.03, 2148072.00, 3940555.34, 0.00]

# Create bar chart
fig, ax = plt.subplots(figsize=(12, 6))
bars = ax.bar(categories, values)

# Customize the chart
ax.set_ylabel('Total Award Value ($)')
ax.set_title('Total Award Values by Category')
ax.set_ylim(0, max(values) * 1.1)  # Set y-axis limit to 110% of max value

# Rotate x-axis labels for better readability
plt.xticks(rotation=45, ha='right')

# Add value labels on top of each bar
for bar in bars:
    height = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2., height,
            f'${height:,.2f}',
            ha='center', va='bottom', rotation=0)

# Adjust layout and display the chart
plt.tight_layout()
plt.show()