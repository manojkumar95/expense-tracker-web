import React from 'react';
import PropTypes from 'prop-types';
import
{ BarChart, Bar, LabelList, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../../assets/styles/components/Table.scss';
import '../../../assets/styles/components/ExpenseTable.scss';

const ExpenseChart = ({ expenses }) => (
  <div className="table-container">
    <div id="chart-container">
      <ResponsiveContainer>
        <BarChart
          width={700}
          height={400}
          data={expenses}
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
          <Bar dataKey="amount" fill="#ea751b" barSize={20} />
          <LabelList dataKey="name" position="top" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

ExpenseChart.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default ExpenseChart;
