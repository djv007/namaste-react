# Namaste react

# parcel
doing the following :
1 . dev build 
2 .  local server
3 . HMR (Hot module replacement) - > as soon as we save any file - we see changes on browser .
4 . uses a file watching algo written in c++
5 . faster builds - coz of caching - caching in a folder .parcel-cache  
6 . image optimisation 
7 . minification 
8 . bundling 
9 . compress - remove whitespaces etc
10 . consistent hashing 
11 . code splitting 
12 . differential bundling -> to supports older borwsers 
13 . diagnostics 
14 . error handling 
15 . https also we cana host our app there 
16 . tree shaking  -> remove unused code for you like some funcs 


# restaurant website

/*
    app
     -> header
        : logo
        : nav-items
            : home
            : about us
            : contact us 
            : cart
     -> body
        : search
        : res card
            : Res-image
            : res name 
            : rating , time , cuisine
     -> footer
        : copyright
        : links

*/


order of execution : 
About
    UserClass
        NestedClass
    Userclass
        NestedClass

Here ABout : parent class calling UserClass(child class) which is calling NestedClass(nested comp)
Order of execution : 
Parent constructor
About.js:16 Parent render
UserClass.js:7 FirstChild constructor
UserClass.js:22 FirstChild render
NestedClass.js:6 Nested child Constrcutor
NestedClass.js:14 Nested child render
UserClass.js:7 SecondChild constructor
UserClass.js:22 SecondChild render
NestedClass.js:6 Nested child Constrcutor
NestedClass.js:14 Nested child render
UserClass.js:7 ThirdChild constructor
UserClass.js:22 ThirdChild render
NestedClass.js:6 Nested child Constrcutor
NestedClass.js:14 Nested child render
NestedClass.js:10 Nested child CompDidMount
UserClass.js:18 FirstChild ComponentDidMount
NestedClass.js:10 Nested child CompDidMount
UserClass.js:18 SecondChild ComponentDidMount
NestedClass.js:10 Nested child CompDidMount
UserClass.js:18 ThirdChild ComponentDidMount
About.js:12 Parent ComponentDidMount
