import React from 'react'

function Villian({villName}) {
    if(villName === 'Hulk'){
        throw new Error('He is a good guy and not a Villian !!')
    }
    return (
        <div>
            {villName}
        </div>
    )
}

export default Villian
