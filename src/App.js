import React from 'react';

import Table from './components/Table';
import FilterForName from './components/FilterForName';
import FilterForColumn from './components/FilterForColumn';
import SelectedFilter from './components/SelectedFilter';

import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterForName />
      <FilterForColumn />
      <SelectedFilter />
      <Table />
    </Provider>
  );
}

export default App;
