import React, { cloneElement } from 'react'
import ChildComponent from './ChildComponent'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
        return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
