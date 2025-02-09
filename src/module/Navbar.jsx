import React from 'react'
import {LogoIcon} from '../assets/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { DashboardNavList } from '../hooks/routes'

const Navbar = () => {
    const navigate = useNavigate()
    function handleHomeBtn() {
        navigate("/")
    }
  return (
    <div className='w-[18%] h-[100vh] overflow-y-auto bg-[#001429] p-2'>
        <div className='w-full items-center px-2 py-3 border-b-[1px] border-b-slate-400'>
            <div className='w-[60%] flex gap-2 cursor-pointer'  onClick={handleHomeBtn}>
                <LogoIcon/>
                <span className='text-[25px] font-medium text-white'>Teacher</span>
            </div>
        </div>
            <div className='flex flex-col pl-4 mt-[50px]'>
                {DashboardNavList.map(item => <NavLink key={item.id}  to={item.path} className={"text-white py-3 flex items-center gap-3 p-2 duration-300 hover:bg-[#bc8f5b9c] first:hover:rounded-tl-[10px] first:hover:rounded-tr-[10px] last:hover:rounded-bl-[10px] last:hover:rounded-br-[10px]"}>
                    {item.icon}
                   <span className='text-[18px] font-medium'>{item.title}</span>
                </NavLink>)}
            </div>
    </div>
  )
}

export default Navbar