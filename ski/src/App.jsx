import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Label from "./pages/Label";
import Ribbon from "./pages/Ribbon";
import CartonBox from "./pages/CartonBox";
import InnerBox from "./pages/InnerBox";
import Scanner from "./pages/Scanner";
import Thermal from "./pages/Thermal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/label",
        element: <Label />,
    },
    {
        path: "/ribbon",
        element: <Ribbon />,
    },
    {
        path: "/cartonbox",
        element: <CartonBox />,
    },
    {
        path: "/innerbox",
        element: <InnerBox />,
    },
    {
        path: "/scanner",
        element: <Scanner />,
    },
    {
        path: "/thermal",
        element: <Thermal />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
