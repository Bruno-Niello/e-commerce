import '../src/styles/App.css';
import NavBar from './components/NavBar';
import ListadoContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App grid-container">
      <NavBar />
      <div class="home">
        <ListadoContainer />
      </div>
    </div>
    
  );
}

export default App;
