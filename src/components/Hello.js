import React from 'react'


const Hello = () => {
//JSX version
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Ashwani</h1>
    //     </div>
    // )

    return React.createElement
   // ('div', null, 'Hello Ashwani from method')
   //('div', null, React.createElement('h1', null, 'Hello Ashwani from method'))
   ('div', {id:'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Ashwani from method'))
}

export default Hello