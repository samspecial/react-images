import logo from './logo.svg';
import data from "./starter-code/data"
import './App.css';

function App() {
  const {destinations} = data[0];
  console.log(destinations)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       { destinations.map((destination, index) => {
       const {png, webp} = destination.images;
      return <div key={index}><p>{destination.name}</p> <img src={png} alt={png}/></div>})}
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

