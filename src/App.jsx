import React from 'react'
import './App.css'
import LoginRoutes from './routes/Login'
import getToken from './hooks/getToken'
import DashboardRoutes from './routes/Dashboard'



function App() {
    const {token} = getToken()
    if(token) {
      return <DashboardRoutes/>
    }
    else{
      return <LoginRoutes/>
    }
}

export default App
