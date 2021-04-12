import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)

    useEffect(() => {
        console.log('useEffect called here')
        window.addEventListener('mousemove', logMousePosition)


        //wen u want to write some cleanup code then return a function from the use effect funciton
        return () => {
            console.log('Component unmounting here')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    const logMousePosition = e => {
        console.log('Mouse Event')
        setXPos(e.clientX)
        setYPos(e.clientY)
    }

    return (
        <div>
            <h2>HOOK VERSION</h2>
            X-Position :: {xPos} || Y-Position :: {yPos}
        </div>
    )
}

export default HookMouse