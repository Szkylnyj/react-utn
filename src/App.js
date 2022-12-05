//import logo from './logo.svg'; 
import Title from './componentes/Title';
import './App.css';
import Mascota from './componentes/Mascota';
function App() {
  return (
    <div className="App">
      <Title/>
      <Mascota/>
      <header className="App-header">
        <img src="imagenes/gatito.jpg" alt="Gatito" />
  {/*<img src={logo} className="App-logo" alt="logo" /> */ }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
