import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionEvent></FunctionEvent>
        <ClassEvent></ClassEvent>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
// <Hello />

// <Profile name="David" age="28">
//   <h5>This is my profile.</h5>
// </Profile>

// <Profile name="Thomas" age="26">
//   <h5>This is my profile.</h5>
// </Profile>

// <Message id="abc123" messageContent="This is a message from App.js." />

// <Counter />
