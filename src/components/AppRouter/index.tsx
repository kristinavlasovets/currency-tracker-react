import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { publicAppRoutes } from './config';

const AppRouter: FC = () => (
  <Routes>
    {publicAppRoutes.map(({ path, Element }) => (
      <Route key={path} path={path} element={<Element />} />
    ))}
  </Routes>
);

export default AppRouter;
