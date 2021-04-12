import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    //IMPORTANT: Setter function in useState hook dsnt auto merge and update object
    //U have to do it on ur own before passing on to setState method

    return (
        <div>
            <form>
                <input
                    type='text'
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input
                    type='text'
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h2>Your First name is - {name.firstName}</h2>
                <h2>Your Last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree