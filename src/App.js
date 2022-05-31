import React, {useState} from 'react';
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import Test from './components/Test';
import ListadoContainer from './components/ItemListContainer';

function App() {
  const [estaMontado, setEstaMontado] = useState(true);
  return (
    <div className="App grid-container">
      <NavBar />
      <div class="home">
        <ListadoContainer />
      </div>
      {estaMontado ? <Test desde={0}/> : 'dismount!'}
      <button onClick={()=>{setEstaMontado(false);}}>Sacar test</button>
      <button onClick={()=>{setEstaMontado(true);}}>Mostrar test</button>
    </div>
    
  );
}

export default App;
