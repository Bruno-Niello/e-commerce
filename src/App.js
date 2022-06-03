import React, {useState} from 'react';
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import ListadoContainer from './components/ItemListContainer';

function App() {
  const [estaMontado, setEstaMontado] = useState(true);
  return (
    <div className="App grid-container">
      <NavBar />
      <div className="home">
        <ListadoContainer />
      </div>
    </div>
  );
}

export default App;
