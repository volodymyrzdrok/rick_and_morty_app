import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/routes';
import Layout from './Layout/Layout';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
const Home = lazy(() => import('pages/Home/Home'));
const InfoCharacter = lazy(() => import('pages/InfoCharacter/InfoCharacter'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<PrivateRoute component={<Home />} />} />
        <Route
          path={routes.characterId}
          element={<PrivateRoute component={<InfoCharacter />} />}
        />
        <Route
          path={routes.login}
          element={<PublicRoute component={<Login />} />}
        />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
