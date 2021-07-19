import React from 'react';
import { useEffect } from 'react';
import {observer} from 'mobx-react'
import Store from './store'
import './App.css';

const App = observer(() => {

  useEffect(() => {
    Store.getApiData()
  }, [])

  return (
    <div>
      {Store.state.isLoading ? (
        <h1>...LOADING</h1>
      ) : (
        <h1>{Store.state.data.original_title}</h1>
      )}
    </div>
  );
})

export default App;
