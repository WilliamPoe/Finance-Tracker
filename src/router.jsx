import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Stock from "./pages/Stock"
import About from "./pages/About";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/expenses", element: <Expenses /> },
    { path: "/stock", element: <Stock />},
    { path: "/about", element: <About />},
]);