import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

import Accounts from "./Pages/Accounts";

import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from "./Layout/DashboardLayout";

// Create the router with proper nesting
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/" element={<Signin />} />
      
      {/* Protected routes with dashboard layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
        {/* <Route path="transactions" element={<Transactions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} /> */}
        {/* Add other routes as needed */}
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;