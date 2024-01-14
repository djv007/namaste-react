import React from 'react';
import ReactDOM from 'react-dom/client';


//  const heading = React.createElement("h1" , {id: "heading" , abc : "xyz"} , "hello world from react!");

const heading = (
    <h1>
        I am heading element
    </h1>
);

const Title = () => <h1>I am title component</h1>;

const HeaderComponent = () => 
     (
        <div id = "container">
            {heading}
            <Title/>
            <h2>I am header component</h2>
        </div>
    )


// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent/>);