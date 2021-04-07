import React from 'react'

function NameList() {
    //const names = ['Dr. Banner', 'Natasha', 'Tony', 'Steve']
    //const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Hulk',
            age: '999999',
            skill: 'Superhuman Strength'
        },
        {
            id: 1,
            name: 'Black Widow',
            age: '50',
            skill: 'Expert Spy'
        },
        {
            id: 3,
            name: 'Iron Man',
            age: '3000',
            skill: 'Genius Level Intellect'
        },
        {
            id: 4,
            name: 'Captain America',
            age: '123456789',
            skill: 'Superhuman Stamina'
        }
    ]
    // const personList = persons.map(person => (
    //     <h2>
    //         I am {person.name}, 
    //         I am {person.age} years old and 
    //         my powers are {person.skill}
    //     </h2>    
    // ))

    const personList = persons.map(person => (
        <Person person={person}> </Person>
        ))

    return <div>{personList}</div>
    // return (

    //     // <div>
    //     //     <h2>{names[0]}</h2>
    //     //     <h2>{names[1]}</h2>
    //     //     <h2>{names[2]}</h2>
    //     //     <h2>{names[3]}</h2>
    //     // </div>

    //     // <div>
    //     //     {
    //     //         names.map(name => <h2>{name}</h2>)
    //     //     }
    //     // </div>

    //     //<div>{nameList}</div>

    //     <div>{heroList}</div>
    // )
}

export default NameList
