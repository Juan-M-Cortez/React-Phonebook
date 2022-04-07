import React from "react";

const Person = (props) => {

    // PhoneNumber ==> Format    
    const charInt = Array.from(String(props.person.number), Number)
    //console.table(charInt)
    const group1 = charInt.filter((num, index) => index < 3)
    const group2 = charInt.filter((num, index) => (index > 2 && index < 6))
    const group3 = charInt.filter((num, index) => index > 5)
    let g1 = group1.join("")
    let g2 = group2.join("")
    let g3 = group3.join("")

    // filter


    return (
            <li>{props.person.name} : {`(${g1})${g2}-${g3}`}</li>
    )
}

export default Person