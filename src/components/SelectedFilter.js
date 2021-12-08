import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectedFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(Context);

  function removeFilter(value) {
    const remove = filterByNumericValues.filter(
      (item) => (item.column !== value.column),
    );
    setFilterByNumericValues(remove);
  }

  return (
    filterByNumericValues.map((filter) => (
      <div key={ filter.column }>
        <span>{ filter.column }</span>
        {'  '}
        <span>{ filter.comparison }</span>
        {'  '}
        <span>{ filter.value }</span>
        {'  '}
        <button
          type="button"
          onClick={ () => removeFilter(filter) }
        >
          x
        </button>
      </div>
    ))
  );
}

export default SelectedFilter;
