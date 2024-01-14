

// const heading = React.createElement("h1" , {id: "heading" , abc : "xyz"} , "hello world from react!");
const heading = React.createElement("div" , {abc : "xyz"} , 
React.createElement("div" , {}, 
[React.createElement("h1" , {id: "heading"} , "Hi i am h1"), React.createElement("h2" , {} , "hi i am h2")]
)
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);