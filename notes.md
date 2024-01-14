## Episode 1 (The Inception) : 

Inception : 

Main job of all js libraries and frameworks is to optimise the most costly operation which is DOM manipulation . 
React does so by using js functions like createElement() directly which are available in browsers as browsers have js engine.

const heading = React.createElement(“h1” , {} , “hello world!”); 
console.log(heading); // object (This returns an object not a html element)
const root = ReactDOM.createRoot(document.getElementById(“root”));

root.render(heading); 
// above line is converting heading object into html element and putting it inside root element.

We do root.render(heading); 
/ suppose root already has some html elements inside it then when we write above line , existing html elements inside root will be replaced by heading.






## Episode 2(Igniting the app) : 