import React, { useState } from 'react'
import Person from './Components/Persons'
import Filter from './Components/Filter'


const App = (props) => {

  // States declarations
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040123456', id: 1 },
    { name: 'Ada Lovelace', number: '39445323523', id: 2 },
    { name: 'Dan Abramov', number: '1243234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39236423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // --START--
  // --Event handler: form (adds to the state array)--
  const addName = (event) => {
    // prevents HTML tag event
    event.preventDefault()
    console.log('[newName] : ', newName)
    let prevent

    // Conditional loop
    for (let index = 0; index < persons.length; index++) {
      prevent = persons[index].name.includes(newName)
      // COPY : name
      if (prevent === true) {
        alert(`${newName} is already added to phonebook`)
        break
      }
    }
    // ORIGINAL : name
    if (prevent === false) {
      const nameObject = {
        id: newName,
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  // --END--

  // Input number -> newName -REAL TIME-
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  // Input string -> newNumber -REAL TIME-
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  

  /*
  // Output filter -> Person
  const handleShowChange = (event) => {
    console.log(event.target.value)
    filterArr.push(event.target.value)
    console.log('filterArr: ',filterArr)
    //const filterArr = event.target.value.filter()

    // varfilterArr = []
  }
  */

  return (
    <div>

      <h1>Phonebook</h1>

      {/*<div>filter shown with<input onChange={handleShowChange}></input></div>*/}
      
      <Filter />
      
      <h2>add a new</h2>

      <div>debug: {newName}</div>

      {/* FORM START */}
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      {/* FORM END */}

      <h2>Numbers</h2>

      <ul className='ul'>
        {/*Displays Name & Number*/
        persons.map(value => <Person key={value.id} person={value}/> )}
      </ul>

    </div>
  )
}

export default App
