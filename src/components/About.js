import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        console.log("Parent constructor");
        super(props);
    }

     componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About us</h1>
                {/* <User name = {"Dhananjay (function)"} location = {"Budaun (function)"}/> */}
                <UserClass  name = {"First"} location = {"Budaun (class)"} />
                <UserClass  name = {"Second"} location = {"Budaun (class)"} />
                <UserClass  name = {"Third"} location = {"Budaun (class)"} />
            </div>
        )
    }
}


export default About;