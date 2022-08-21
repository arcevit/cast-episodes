import React, { useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { TPage } from './util/types';
import FilterBar from './components/FilterBar';
import Cast from './pages/Cast';
import Episodes from './pages/Episodes';



function App() {
  const [page, setPage] = useState<TPage>('cast');

  return (
    <div className="App">
      <NavBar {...{ page, setPage }}/>
      <FilterBar {...{ page }} />
      {page === 'cast' ? <Cast /> : <Episodes />}
    </div>
  );
}

export default App;
