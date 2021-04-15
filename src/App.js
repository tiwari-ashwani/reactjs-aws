// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './appStyles.css'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <br />

        <CounterThree />
        {/* <CounterTwo /> */}
        {/* <CounterOne /> */}




        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}

        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
        {/* <PostForm /> */}
        {/* <PostList /> */}
        {/* <UserProvider value ='Ashwani'>
          <ComponentC />
        </UserProvider> */}
        {/* <br /><ClickCounterTwo /> */}
        {/* <br /><HoverCounterTwo /> */}
        {/* <br /><User render = {(isLoggedIn) => isLoggedIn ?'Ashwani' : 'Guest'}/> */}

        {/* <br />
        <CounterRenderProps
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count}
              incrementCount={incrementCount} />
          )}
        />

        <br />
        <CounterRenderProps
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count}
              incrementCount={incrementCount} />
          )}
        /> */}


















        {/* <br /> <HoverCounter mame='Tony Stark'/> */}
        {/* <br /><ClickCounter name ='Almighty Hulk'/> */}
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
