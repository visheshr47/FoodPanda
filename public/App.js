import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
//import styles from "./styles.css";
import Header from "../src/components/Heading";
import Body from "../src/components/Body.js";
import Footer from "../src/components/Footer";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Error from "../src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Shimmer from "../src/components/Shimmer";
//import Instamart from "../src/components/Instamart";


// "build": "npx parcel public/index.html --dist-dir ./build",
// "deploy": "gh-pages -d build"

const Instamart = lazy(() => import("../src/components/Instamart"));
const App = () => {
    return (
        <div className=" min-h-screen flex flex-col " >
            <Header className="flex flex-col min-h-screen" />
            <Outlet className="flex flex-col min-h-screen" />
            <Footer className=" mt-auto   " />
        </div >)

}
const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
                // element: <Suspense fallback={<h1>Loading.....</h1>}><Instamart /></Suspense>
                //Fallback is used for the time by between which it takes to load things
                //Suspense tag is compulsory to load the lazy component
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
