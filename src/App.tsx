import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AdminHomePage from "./pages/AdminHome";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* {process.env.API_URL == "" && ( */}
        <ReactQueryDevtools initialIsOpen={false} />
      {/* )} */}
    </QueryClientProvider>
  );
}

export default App;
