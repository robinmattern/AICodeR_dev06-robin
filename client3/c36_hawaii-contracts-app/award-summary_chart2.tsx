import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { category: "Goods & Services", amount: 3940835.34 },
  { category: "Construction", amount: 3472431.63 },
  { category: "Professional Services", amount: 3021446.03 },
  { category: "Services", amount: 2148072.00 },
  { category: "Goods and Services", amount: 2065412.06 },
  { category: "Health and Human Services", amount: 0.00 }
];

const AwardSummaryChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" name="Total Award Amount" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default AwardSummaryChart;
