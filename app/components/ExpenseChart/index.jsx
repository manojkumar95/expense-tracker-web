import React from 'react';
import { BarChart, Bar, LabelList, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../../assets/styles/components/Table.scss';
import '../../../assets/styles/components/ExpenseTable.scss';

const data = [
  {
    name: 'Shopping', amt: 4000
  },
  {
    name: 'Electricity', amt: 3000
  },
  {
    name: 'Billing', amt: 2000
  },
  {
    name: 'Cinema', amt: 2780
  },
  {
    name: 'Entertainment', amt: 1890
  }
];

const ExpenseChart = () => (
  <div className="table-container">
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 30
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label htmlFor="Expense" value="Expense" position="left"> Expense </Label>
      </XAxis>
      <YAxis label={{ value: 'Category', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="amt" fill="#ea751b" barSize={30} />
      <LabelList dataKey="name" position="top" />
    </BarChart>
  </div>
);

export default ExpenseChart;
