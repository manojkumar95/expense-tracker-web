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
  <div>
    <div className="col-12 p-0">
      <span className="expense-title">
        Filters
      </span>
    </div>
    <div className="m-t-35">
      <SelectField
        name="applyFilters"
        label="Filter By"
        isLableRequired
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
    {Object.keys(selectedFilter).length > 0 && selectedFilter.id !== 'noFilter' &&
    <div className="m-t-35">
      <DatePicker
        value={dateValue}
        name="filterDate"
        label="Filter Date"
        handleChange={onFilterDateChange}
      />
    </div>
    }
    <div className="col-lg-8 col-6 offset-lg-1 col-sm-8 offset-sm-4 offset-md-4 offset-3">
      <button
        className="btn btn-default filter-btn m-t-35"
        onClick={applyFilters}
        disabled={!dateValue}
      >
        Apply Filters
      </button>
    </div>
  </div>
);

FilterExpense.propTypes = {
  onFilterDateChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  dateValue: PropTypes.string.isRequired,
  selectedFilter: PropTypes.object.isRequired,
  applyFilters: PropTypes.func.isRequired
};

export default FilterExpense;
