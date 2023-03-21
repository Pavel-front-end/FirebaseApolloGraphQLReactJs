import { Navigate, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  homePath: string;
  correctPath: string;
  outlet: JSX.Element;
  isLoading?: boolean
};

function navigate({isAuthenticated, homePath, correctPath, outlet}: ProtectedRouteProps, pathname: string) {
  if(isAuthenticated && correctPath === pathname) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: isAuthenticated ? correctPath : homePath }} />;
  }
}

export default function ProtectedRoute({isAuthenticated, homePath, correctPath, outlet, isLoading}: ProtectedRouteProps) {
  const currentLocation = useLocation();
  if(isLoading) {
    setTimeout(() => {
     return navigate({isAuthenticated, homePath, correctPath, outlet}, currentLocation.pathname)
    }, 1000)
  } else {
    return navigate({isAuthenticated, homePath, correctPath, outlet}, currentLocation.pathname)
  }
  return null;
};