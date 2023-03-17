import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/routes';
import Layout from './Layout/Layout';
const Home = lazy(() => import('pages/Home/Home'));
const InfoCharacter = lazy(() => import('pages/InfoCharacter/InfoCharacter'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.characterId} element={<InfoCharacter />} />
        <Route path={routes.login} element={<Login />} />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
