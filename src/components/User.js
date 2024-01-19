import { useState } from "react";

const User = (props) => {
    const {name,location} = props;
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>djv007</h3>
        </div>
    )
};

export default User;