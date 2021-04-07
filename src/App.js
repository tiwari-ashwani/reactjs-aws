// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GreetClass from './components/GreetClass'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent /><br/>
      <Greet name="Mister" place="Old Gotham" />
      <Greet name="Bruce" place="Gotham" />
      <Greet name="Wayne" place="Old Gotham" />

      <GreetClass name="Mister" place="Old Gotham" />
      <GreetClass name="Bruce" place="Gotham" />
      <GreetClass name="Wayne" place="New Gotham" />

      <Hello />
      <Message /><br />
      <Counter /><br />
      <FunctionClick /><br/>
      <ClassClick /><br/>
      <EventBind />

    </div>
  );
}

export default App;
