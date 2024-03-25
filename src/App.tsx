import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AdminHomePage from "./pages/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin/*",
    element: <AdminHomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
