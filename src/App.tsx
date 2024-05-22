import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
// import AdminHomePage from "./pages/AdminHome";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardProvider } from "./context/DashboardContext";
import { ReactQueryDevtools } from "react-query/devtools";
import SignInSide from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin/*",
    element: <SignInSide />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardProvider>
        <RouterProvider router={router} />
        {process.env.API_URL == "" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </DashboardProvider>
    </QueryClientProvider>
  );
}

export default App;
