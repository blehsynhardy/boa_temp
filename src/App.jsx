import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Signin />} />)
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
