import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import Home from "../Pages";
import Account from "../Pages/Account";
import WelcomeSona from "../Pages/WelcomeSona";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const RoutesPath: FC = () => {
  const currentLocation = useLocation();
  const { user, checkingAuthState } = useAuth();

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: user,
    isLoading: checkingAuthState,
    homePath: "/",
    correctPath: currentLocation.pathname,
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome-sona" element={<WelcomeSona />} />
      <Route path="/log-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={<Account />}
          />
        }
      />
    </Routes>
  );
};
export default RoutesPath;
