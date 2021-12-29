import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterForColumn() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    columnValues,
    setColumnValues,
    comparisonValues,
  } = useContext(Context);

  function filterForNumber() {
    setFilterByNumericValues(([
      ...filterByNumericValues,
      { column, comparison, value },
    ]));
    setColumnValues(
      columnValues.filter((item) => item !== column),
    );
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columnValues.map((columnValue) => (
          <option key={ columnValue } value={ columnValue }>{ columnValue }</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {comparisonValues.map((comparisonValue) => (
          <option key={ comparisonValue } value={ comparisonValue }>
            { comparisonValue }
          </option>
        ))}
      </select>

      <input
        type="number"
        value={ value }
        data-testid="value-filter"
        name="value"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterForNumber }
      >
        Filtrar

      </button>
    </form>
  );
}

export default FilterForColumn;
