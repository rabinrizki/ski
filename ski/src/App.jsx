import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Label from "./pages/Label";
import Ribbon from "./pages/Ribbon";
import CartonBox from "./pages/CartonBox";
import Scanner from "./pages/Scanner";
import Thermal from "./pages/Thermal";
import Labelnonsticker from "./pages/Labelnonsticker";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/label",
        element: <Label />,
    },
    {
        path: "/labelnonsticker",
        element: <Labelnonsticker/>,
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
