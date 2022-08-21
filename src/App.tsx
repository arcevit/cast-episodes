import React, { useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { TPage } from './util/types';


function App() {
  const [page, setPage] = useState<TPage>('cast');

  return (
    <div className="App">
      <NavBar {...{ page, setPage }}/>
    </div>
  );
}

export default App;
