import React, { Component, useState } from 'react'



export default function LifeCycle() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Functional Component</h2>
            <button type='button' onClick={() => setCount(count + 1)}>Count {count}</button>
            <MyClass count={count} />
        </div>
    )
}




export class MyClass extends Component {

    constructor() {
        super()
        this.state = {
            fname: "Piyush",
            lname: "Thaware",
            email: "Piyush@gmail.com"
        }
    }
    render() {
        console.warn("Render is working");
        return (
            <div>
                <h1>Class Component</h1>
                <ul>
                    <li>{this.state.fname}</li>
                    <li>{this.state.lname}</li>
                    <li>{this.state.email}</li>
                </ul>
                <button type='button' onClick={() => this.setState({ email: "Shreyash@gmail.com" })}>Update Email</button>
                <p>{this.props.count}</p>
            </div>
        )
    }
}
