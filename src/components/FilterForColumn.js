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
    setFilterByNumericValues,
    setFilter,
  } = useContext(Context);

  function filterForNumber() {
    setFilterByNumericValues(([
      { column, comparison, value },
    ]));
    setFilter(true);
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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
