import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { island: "Statewide", amount: 5958850.36 },
  { island: "Honolulu", amount: 3061210.97 },
  { island: "Maui", amount: 1691771.00 },
  { island: "Molokai", amount: 2147972.00 },
  { island: "Hawaii", amount: 1244616.73 },
  { island: "Kauai", amount: 932322.71 },
  { island: "Oahu", amount: 873574.76 },
  { island: "Lanai", amount: 14949.65 }
];

const AwardSummaryByIslandChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="island" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" name="Total Award Amount" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default AwardSummaryByIslandChart;
