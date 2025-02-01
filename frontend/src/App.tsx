import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginContextProvider from "./contexts/loginContext";

const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Homepage = lazy(() => import("./pages/Homepage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <Router>
      <LoginContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </Suspense>
      </LoginContextProvider>
    </Router>
  );
}

export default App;
