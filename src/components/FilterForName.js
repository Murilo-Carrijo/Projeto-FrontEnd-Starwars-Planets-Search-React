import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterForName() {
  const { filterByName, setFilterByName } = useContext(Context);

  function handleChange({ target }) {
    const { value } = target;
    setFilterByName(value);
  }

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName }
        name="filterName"
        onChange={ handleChange }
      />
    </header>
  );
}

export default FilterForName;

// Ideia para o filtro retirada do video https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=158s
