import React, { Component } from "react";

class ClassLifeCycle extends Component {
    constructor() {
        super();
        console.warn("I am Constructor");

        this.state = {
            count: 0,
            show: true
        }
    }

    componentDidMount() {
        console.log("I am ComponentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("I am ComponentDidUpdate");
        console.log("This will return the previous state : ", prevState, "current state : ", this.state.count);
        // this.setState({count:this.state.count+1});  // this leads to infinite loop
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1
            })
        }
        console.log("snapShot : ", snapShot);  // this will always return undefined until you implement getSnapShot Method
    }
    // We can stop the execution of componentDid update if we have implement shouldComponentUpdate() return false;

    shouldComponentUpdate() {  // block the rendering
        console.warn("I am shouldComponentUpdate");
        if (this.state.count === 5) {
            return false;
        }
        return true;
    }



    render() {
        console.log("I am Render");
        return (
            <div>
                <h2>Class Life Cycle</h2>
                <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count {this.state.count}</button>

                <br /><br />
                {
                    this.state.show ?
                        <Child />
                        :
                        "I am Parent Component"
                }
                <button type="button" onClick={() => this.setState({ show: !this.state.show })}>Toggle To Child</button>
            </div>
        )
    }
}

export default ClassLifeCycle;



export class Child extends Component {
    componentWillUnmount() {
        console.error("I am ComponentWillUnmount");
    }
    render() {
        console.log("i am child");
        return (
            <div>
                <h1>I am Child</h1>
            </div>
        )
    }
}
