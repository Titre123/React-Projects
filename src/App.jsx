import logo from './logo.svg';
import Logo from './components/logoUI/logo';
import NavDropdown from './components/nav_dropdown/nav_dropdown';
import './App.css';



function App() {
  return (
    <div className="App">
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
      <Logo />
      <NavDropdown navDropdownText='Resources' />
    </div>
  );
}

export default App;
