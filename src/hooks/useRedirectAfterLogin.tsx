import React from "react";
import { useNavigate } from "react-router-dom";

const useRedirectAfterLogin = () => {
  const navigate = useNavigate();

  // It is a hook and not a helper function because we need to use the navigate from react-router-dom.

  return () => {
    // Either to a page the user was on before or to the home page
    const prev = window?.sessionStorage.getItem("prevPage") || "/";
    window?.sessionStorage.removeItem("prevPage"); // Remove the prevPage from sessionStorage
    navigate(prev, { replace: true }); // replace:true, so the user can't go back to the login page by clicking the back button.
  };
};

export default useRedirectAfterLogin;
