import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginContextProvider from "./contexts/loginContext";
import UserContextProvider from "./contexts/userContext";
import UserProfilePage from "./pages/UserProfilePage";
import AdminDashboard from "./component/AdminDashboard";
import AdminTasksTable from "./component/AdminTaskTable";
import AdminDevelopersTable from "./component/AdminDeveloperList";


const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Homepage = lazy(() => import("./pages/Homepage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <Router>
      <LoginContextProvider>
        <UserContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/userProfile" element={<UserProfilePage />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/adminTasksTable" element={<AdminTasksTable/>} />
              <Route path="/adminDeveloperTable" element={<AdminDevelopersTable/>} />
              
            </Routes>
          </Suspense>
        </UserContextProvider>
      </LoginContextProvider>
    </Router>
  );
}

export default App;
