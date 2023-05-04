import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { publicAppRoutes } from './types'

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicAppRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  )
}

export default AppRouter
