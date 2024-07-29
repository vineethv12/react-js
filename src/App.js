import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import ResMenu from "./components/ResMenu";
// import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "noob",
        }
        setUserName(data.name);
    }, [])

    return (

        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app bg-slate-400">
                    {/* <UserContext.Provider value={{ loggedInUser: "hertel" }}> */}
                    <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>


    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,

            },
            ,
            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>} ><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <ResMenu />
            }
            ,
            {
                path: "/cart",
                element: <Cart />
            }

        ],
        errorElement: <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);