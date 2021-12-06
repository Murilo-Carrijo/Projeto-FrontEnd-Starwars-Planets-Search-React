import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  const contexValue = {
    planets,
    setPlanets,
    filterName,
    setFilterName,
  };

  return (
    <Context.Provider value={ contexValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Provider;
