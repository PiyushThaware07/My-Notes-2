import React, { Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();

        this.state = {
            fname: "Shreyash",
            lname: "Thaware"
        };

        // Bind the updateName method to the class instance
        this.updateName = this.updateName.bind(this);
    }

    updateName(newName) {
        this.setState({
            fname: newName
        });
    }

    render() {
        return (
            <>
                <h1>Class Component</h1>
                {/* Pass updateName function as myfunction prop */}
                <InternalClassComponent
                    fname={this.state.fname}
                    lname={this.state.lname}
                    myfunction={this.updateName} // Pass function reference, don't call it here
                />
                <button
                    type="button"
                    onClick={() =>
                        this.setState({ fname: "Pankaj", lname: "Sharma" })
                    }
                >
                    Update Name
                </button>
            </>
        );
    }
}

class InternalClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increaseCounter() {
        this.setState({ count: this.state.count + 1 });
    }

    decreseCounter() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <>
                <h1>Internal Class Component</h1>
                <p>{this.state.count}</p>
                <button
                    type="button"
                    onClick={() => this.decreseCounter()}
                >
                    Decrement Count --
                </button>
                <button
                    type="button"
                    onClick={() => this.increaseCounter()}
                >
                    Increase Count ++
                </button>

                {/* Props */}
                <h3>Props</h3>
                <p>
                    {this.props.fname} {this.props.lname}
                </p>
                {/* Call updateName from props */}
                <button
                    type="button"
                    onClick={() => this.props.myfunction("Json")}
                >
                    Update Name
                </button>
            </>
        );
    }
}

export default ClassComponent;
