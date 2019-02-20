import React from 'react';
import PropTypes from 'prop-types';
import
{ BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../../assets/styles/components/Table.scss';
import '../../../assets/styles/components/ExpenseTable.scss';

const constructChartObject = expenses => {
  const expenseChartData = [];
  if (Object.keys(expenses).length > 0 && expenses[0] && expenses[0].$init) {
    Object.keys(expenses).forEach(key => {
      const { _doc } = expenses[key];
      expenseChartData.push({ name: _doc.name, amount: expenses[key].amount });
    });
  }
  return expenseChartData;
};

const ExpenseChart = ({ expenses }) => {
  const expenseData = constructChartObject(expenses);
  return (
    <div id="chart-container">
      <ResponsiveContainer>
        <BarChart
          width={700}
          height={400}
          data={expenseData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 30
          }}
        >
          <CartesianGrid vertical horizontal={false} strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label htmlFor="Category" value="name" position="left"> Category </Label>
          </XAxis>
          <YAxis label={{ value: 'Expense', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" name="Amount" fill="#ea751b" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>);
};

ExpenseChart.propTypes = {
  expenses: PropTypes.object.isRequired
};

export default ExpenseChart;
