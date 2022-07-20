import './App.css';
import React from 'react';
import CollectionPage  from './components/collectionPage';
import data from './static/data/items.json'
function App() {
  return (
    <React.Fragment>
      <CollectionPage items={data.results}/>
    </React.Fragment>
  );
}

export default App;
