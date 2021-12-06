import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterPlanet() {
  const { filterName, setFilterName } = useContext(Context);

  return (
    <input
      type="text"
      data-testid="name"
      value={ filterName }
      name="filterName"
      onChange={ ({ target }) => setFilterName(target.value) }
    />
  );
}

export default FilterPlanet;
