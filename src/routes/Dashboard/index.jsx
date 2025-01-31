import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardRouteList } from '../../hooks/routes'

const DashboardRoutes = () => {
  return (
    <Routes>
        {DashboardRouteList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default DashboardRoutes