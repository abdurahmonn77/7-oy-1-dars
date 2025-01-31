import React from 'react'
import PATH from './path'
import { Home, Groups, Teachers, Students, Market } from '../pages/Dashboard'
export const DashboardRouteList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        title:"Asosiy"
    },
    {
        id:2,
        path:PATH.groups,
        element:<Groups/>,
        title:"Guruxlar"
    },
    {
        id:3,
        path:PATH.teachers,
        element:<Teachers/>,
        title:"O'qituvchilar"
    },
    {
        id:4,
        path:PATH.market,
        element:<Market/>,
        title:"Market"
    },
    {
        id:5,
        path:PATH.students,
        element:<Students/>,
        title:"Studentlar"
    },
] 