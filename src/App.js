// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet'
import GreetClass from './components/GreetClass'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InlineStyling from './components/InlineStyling';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import PortalDemo from './components/PortalDemo'
import Villian from './components/Villian'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <br /> <HoverCounter mame='Tony Stark'/>
        <br /><ClickCounter name ='Almighty Hulk'/>
        {/* <ErrorBoundary>
          <Villian villName='Joker' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Villian villName='Hulk' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Villian villName='Thanos' />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleMounting /><br /> */}
        {/* <LifecycleUpdating /><br /> */}
        {/* <Form /> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">

//       <h1 className='error'>Error Style</h1>
//       <h1 className={styles.success}>Success Style</h1>
//       <InlineStyling />
//       <Stylesheet primary={true} />
//       <NameList /> <br />
//       <UserGreeting /> <br />
//       <ParentComponent /><br />
//       <Greet name="Mister" place="Old Gotham" />
//       <Greet name="Bruce" place="Gotham" />
//       <Greet name="Wayne" place="Old Gotham" />
//       <GreetClass name="Mister" place="Old Gotham" />
//       <GreetClass name="Bruce" place="Gotham" />
//       <GreetClass name="Wayne" place="New Gotham" />
//       <Hello />
//       <Message /><br />
//       <Counter /><br />
//       <FunctionClick /><br />
//       <ClassClick /><br />
//       <EventBind />

//     </div>
//   );
//}

export default App;
