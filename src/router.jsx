import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Expenses from "./pages/Expenses";
import Stock from "./pages/Stock";
import About from "./pages/About";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/expenses", element: <Expenses /> },
    { path: "/stock", element: <Stock />},
    { path: "/about", element: <About />},
]);