import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'redux/slice';
import routes from 'utils/routes';

const PrivateRoute = ({ component, redirectTo = routes.login }) => {
  const isAuth = useSelector(selectUser);

  return isAuth ? component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
