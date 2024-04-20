import logo from './logo.svg';
import './App.css';
import { RootContextProvider } from './RootContext.js';
import UserDisplay from './UserDisplay';
import UserInput from "./UserInput";

function App() {
  return (
    <RootContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <UserInput/>
            <UserDisplay />
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
    </RootContextProvider>
  );
}

export default App;
