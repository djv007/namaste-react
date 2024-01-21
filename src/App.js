import React, { Suspense, lazy,useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResInfo from './components/ResInfo';
import UserContext from "./utils/UserContext";
// this provider is a bridge between react and redux so coming 
// from this librarry react-redux
import { Provider } from 'react-redux';
import appstore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(()=> import('./components/Grocery'));


const AppLayout = () => {
    const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Dhananjay Vaish",
    };
    setUserName(data.name);
  }, []);
    return (
      <Provider store={appstore}>
     <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
       </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <ResInfo/>
            },
            {
              path: "/cart",
              element: <Cart/>
          },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
