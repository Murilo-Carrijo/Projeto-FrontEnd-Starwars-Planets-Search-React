import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import fetchApi from '../service/fetchApi';

function Table() {
  const { planets, setPlanets, filterName } = useContext(Context);

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
            .filter((planet) => (filterName
              ? planet.name.includes(filterName)
              : true))
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
