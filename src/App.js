import React from 'react';

import Table from './components/Table';
import FilterForName from './components/FilterForName';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterForName />
      <Table />
    </Provider>
  );
}

export default App;
