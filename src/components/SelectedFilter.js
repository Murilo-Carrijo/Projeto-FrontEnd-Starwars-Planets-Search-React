import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectedFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(Context);

  function renderFilter(value) {
    const render = filterByNumericValues.filter(
      (item) => (item.column !== value.column),
    );
    setFilterByNumericValues(render);
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
          onClick={ () => renderFilter(filter) }
        >
          x
        </button>
      </div>
    ))
  );
}

export default SelectedFilter;
