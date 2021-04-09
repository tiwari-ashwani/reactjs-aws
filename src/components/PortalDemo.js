import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1> This is Portal's Demo !! </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
