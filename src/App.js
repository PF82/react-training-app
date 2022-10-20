import logo from './logo.svg';
import './App.scss';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="App">

      <nav></nav>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      <main>
        <CurrentWeather/>
      </main>

      <footer></footer>

    </div>
  );
}

export default App;
