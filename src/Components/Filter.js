import { getActiveElement } from '@testing-library/user-event/dist/utils';
import App from '../App';
import React from 'react'

const Filter = (props) => {

  const tempArr = []
   //let test = []

  const handleFilter = (event) => {
    console.log(event.target.value)
    test = tempArr.concat(event.target.value)
  }
  

  

  return (
    <div>
        <div>filter shown with<input id='myInput' onChange={handleFilter}/></div>
    </div>
  )
}

export default Filter