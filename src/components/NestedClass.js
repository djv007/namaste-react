import React from "react";

class NestedClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Nested child Constrcutor");
    }

    componentDidMount() {
        console.log("Nested child CompDidMount");
    }

    render() {
        console.log("Nested child render");
        return (
            <h1>Nested child</h1>
        )
    }
}

export default NestedClass;