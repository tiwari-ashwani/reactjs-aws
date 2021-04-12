import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 500)
        return () => {
            clearInterval(interval)
        }
        //}, [count])
    }, [])

    return (
        <div>
            <h1>Hook Counter :: {count}</h1>
        </div>
    )
}

export default IntervalHookCounter
