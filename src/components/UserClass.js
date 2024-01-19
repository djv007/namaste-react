import React from "react";
import User from "./User";
import NestedClass from "./NestedClass";
import {GITHUB_USER_API} from "../utils/constants";


class UserClass extends React.Component {
    constructor(props) {
        console.log(props.name + "Child constructor");
        super(props);
        // console.log(props);
        this.state = {
            count : 0,
            count2 : 2,
            count3 : 0,
            userInfo : {
                name : "Dummy",
                location : "Default"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");
        const data = await fetch(GITHUB_USER_API);
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        console.log("json" , json);
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

     render() {
        console.log(this.props.name + "Child render");
        // const {name,location} = this.props;
        const {count, count2} = this.state;
        const {name , location , avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
            <h1>{count}</h1>
            <button 
            onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                })
            }
            }
            >
                Increase count
            </button>
            <h1>{count2}</h1>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <img src={avatar_url}/>
            <h3>djv007</h3>
            <NestedClass/>
        </div>
        )
   
    }
}

export default UserClass;