// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GreetClass from './components/GreetClass'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Greet name="Mister" place="Old Gotham" />
      <Greet name="Bruce" place="Gotham" />
      <Greet name="Wayne" place="Old Gotham" />

      <GreetClass name="Mister" place="Old Gotham" />
      <GreetClass name="Bruce" place="Gotham" />
      <GreetClass name="Wayne" place="New Gotham" />

      <Hello />

      <Message />

      <Counter />
    </div>
  );
}

export default App;
