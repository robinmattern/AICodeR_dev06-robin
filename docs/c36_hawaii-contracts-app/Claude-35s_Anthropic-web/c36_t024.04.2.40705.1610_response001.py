import pandas as pd
from io import StringIO

# Assuming the data is in a string variable called 'data'
df = pd.read_csv(StringIO(data), sep='\t')

# Convert 'Original Award Amount' to numeric, removing '$' and ',' characters
df['Original Award Amount'] = df['Original Award Amount'].replace('[\$,]', '', regex=True).astype(float)

# Group by Category and sum the Original Award Amount
summary = df.groupby('Category')['Original Award Amount'].sum().sort_values(descending=True)

print("Summary of Total Award Values by Category:")
for category, total in summary.items():
    print(f"{category}: ${total:,.2f}")

print(f"\nTotal Awards: ${summary.sum():,.2f}")
