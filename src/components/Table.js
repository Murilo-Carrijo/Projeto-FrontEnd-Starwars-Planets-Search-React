import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import fetchApi from '../service/fetchApi';

function Table() {
  const {
    planets, setPlanets, filterByName, filterByNumericValues,
  } = useContext(Context);

  function checkFilter(infoPlanet) {
    const info = filterByNumericValues.every((t) => {
      if (t.comparison === 'maior que') return parseFloat(infoPlanet[t.column]) > t.value;
      if (t.comparison === 'menor que') return parseFloat(infoPlanet[t.column]) < t.value;
      if (t.comparison === 'igual a') {
        return parseFloat(t.value) === parseFloat(infoPlanet[t.column]);
      }
      return false;
    });
    return info;
  }

  useEffect(() => {
    fetchApi().then((response) => setPlanets(response));
  }, [setPlanets]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Periond</th>
          <th>Orbital Period</th>
          <th>Dianeter</th>
          <th>Clinate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {
          planets
            .filter((planet) => (filterByName
              ? planet.name.includes(filterByName)
              : true))
            .filter((planet) => (
              filterByNumericValues.length > 0
                ? checkFilter(planet)
                : true
            ))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.residents}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
