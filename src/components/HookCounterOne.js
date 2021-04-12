import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //IMP: useEffect runs after every render of comp
    useEffect(() => {
        console.log('Updating Doc title')
        document.title = `You clicked ${count} times`
    }, [ count ]) 
    // CONDITIONAL CHECK; in order to conditinoal run an effect u need to add second param.
    // the second param is value with changes on

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)} />
            <button
                onClick={() => setCount(count + 1)}
            >Click {count} times !!</button>
        </div>
    )
}

export default HookCounterOne