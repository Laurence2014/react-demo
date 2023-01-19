import React from 'react'

//function Greet() {
//    return <h1>Hello Vishwas</h1>
//}

const Greet = props => {

    console.log(props)

const sayHi = (e) => {
    e.preventDefault()
    alert("Hi!")
}

    return (
        <div>
            <h1>
            Hello {props.name} a.k.a {props.heroName}
            </h1>
            <button onClick={(e) => sayHi(e)}>
                Click me
            </button>
            {props.children}
        </div>
    )
}

export default Greet