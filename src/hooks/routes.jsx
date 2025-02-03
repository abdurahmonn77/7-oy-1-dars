import React from 'react'
import PATH from './path'
import { Home, Groups, Teachers, Students, Market } from '../pages/Dashboard'
import { HomeOutlined, ShoppingCartOutlined, TeamOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
export const DashboardRouteList  = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        title:"Asosiy",
        icon:<HomeOutlined />
    },
    {
        id:2,
        path:PATH.groups,
        element:<Groups/>,
        title:"Guruxlar",
        icon:<UsergroupAddOutlined />
    },
    {
        id:3,
        path:PATH.teachers,
        element:<Teachers/>,
        title:"O'qituvchilar",
        icon:<UserOutlined />
    },
    {
        id:4,
        path:PATH.market,
        element:<Market/>,
        title:"Market",
        icon:<ShoppingCartOutlined />
    },
    {
        id:5,
        path:PATH.students,
        element:<Students/>,
        title:"Studentlar",
        icon:<TeamOutlined />
    },
] 