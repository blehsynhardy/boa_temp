import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
