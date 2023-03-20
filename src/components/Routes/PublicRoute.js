import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'redux/slice';
import routes from 'utils/routes';

const PublicRoute = ({ component, redirectTo = routes.home }) => {
  const isAuth = useSelector(selectUser);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};
export default PublicRoute;
