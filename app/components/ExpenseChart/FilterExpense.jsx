import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from '../FormComponents/DatePicker';
import SelectField from '../FormComponents/Selectfield';

const filterOptions = [
  { id: 'day', name: 'Day' },
  { id: 'week', name: 'Week' },
  { id: 'month', name: 'Month' },
  { id: 'noFilter', name: 'No FIlter' }
];

const FilterExpense = ({
  onFilterDateChange, dateValue,
  onFilterChange, selectedFilter, applyFilters
}) => (
  <div className="col-11 offset-1">
    <div className="col-12 p-0">
      <span className="expense-title">
        Filters
      </span>
    </div>
    <div className="row p-0 mb-5">
      <div className="col-md-4 col-12 m-t-35">
        <SelectField
          name="applyFilters"
          label="Filter By"
          options={filterOptions}
          placeholder="Select filter"
          simpleValue
          labelKey="name"
          valueKey="id"
          isRequired
          isMulti={false}
          value={selectedFilter}
          handleChange={onFilterChange}
        />
      </div>
      {Object.keys(selectedFilter).length > 0 && selectedFilter !== 'noFilter' &&
      <div className="col-md-4 col-12 m-t-35">
        <DatePicker
          value={dateValue}
          name="filterDate"
          label="Filter Date"
          handleChange={onFilterDateChange}
        />
      </div>
    }
      <div className="col-md-4 col-12">
        <button
          className="btn btn-default filter-btn m-t-35"
          onClick={applyFilters}
          disabled={(selectedFilter !== 'noFilter' && !dateValue)}
        >
        Filter
        </button>
      </div>
    </div>
  </div>
);

FilterExpense.propTypes = {
  onFilterDateChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  dateValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  selectedFilter: PropTypes.string.isRequired,
  applyFilters: PropTypes.func.isRequired
};

export default FilterExpense;
