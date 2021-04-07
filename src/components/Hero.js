import React from 'react'

function Hero({hero}) {
    return (
        <div>
            <h2>
            I am {hero.name}, 
            I am {hero.age} years old and 
            my powers are {hero.skill}
        </h2> 
        </div>
    )
}
export default Hero