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
  onFilterChange, selectedFilter
}) => (
  <div>
    <div>
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
    <div className="m-b-25">
      <DatePicker
        value={dateValue}
        name="filterDate"
        label="Filter Date"
        handleChange={onFilterDateChange}
      />
    </div>
    }
  </div>
);

FilterExpense.propTypes = {
  onFilterDateChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  dateValue: PropTypes.string.isRequired,
  selectedFilter: PropTypes.object.isRequired
};

export default FilterExpense;
