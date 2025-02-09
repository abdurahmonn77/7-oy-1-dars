import React, { useEffect, useState } from 'react'
import Caption from '../../components/Caption'
import {  LineOutlined, MoreOutlined, UserAddOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { instance } from '../../hooks/instance'
import CustomTable from '../../components/CustomTable'
import FilterCustom from '../../components/FilterCustom'

const Teachers = () => {
  const [stackId, setStackId] = useState(null)
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  
  const columns = [
    {
      title:"Id",
      dataIndex:'id'
    },
    {
      title:"Ustoz Ismi",
      dataIndex:'name'
    },
    {
      title:"Ustoz yoshi",
      dataIndex:'age'
    },
    {
      title:"Yo'nalishi",
      dataIndex:'stack'
    },
    {
      title:"Ustoz Lavozimi",
      dataIndex:'status'
    },
    {
      title:"Ustoz Raqami",
      dataIndex:'phone'
    },
    {
      title:"Batafsil",
      dataIndex:'action'
    },
  ]
  useEffect(() => {
    instance().get("/teachers",{
      params:{stackId}
    }).then(res => {
     setTeachers( res.data.map((item, index) => {
      item.key = index
      item.name = item.name ? item.name : <LineOutlined/>
      item.age = item.age ? item.age : <LineOutlined/>
      item.stack = item.stack ? item.stack : <LineOutlined/>
      item.status = item.status ? item.status : <LineOutlined/>
      item.phone = item.phone ? item.phone : <LineOutlined/>
      item.action = <button className='p-2 text-white hover:scale-[1.1] duration-300 bg-[#bc8e5b] rounded-md  cursor-pointer'><MoreOutlined   size={"large"} className='text-[20px] rotate-90'/></button>

      return item
    }))
    })
  }, [refresh, stackId])

  function handleSearchByName(e) {
    setIsLoading(true)
    const filterByName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  if(e.target.value) {
    setTimeout(() => {
      setTeachers(filterByName)
      setIsLoading(false)
    }, 1000)
  }else{
    setTimeout(() =>  {
      setIsLoading(false)
      setRefresh(!refresh)
    }
    ,1000)
  }
  }

  
  return (
    <div className='p-5'>
      <Caption navigateTo={"/teachers/add"} title={"Utozlar"} count={"5"} icon={<UserAddOutlined/>} />
      <div className='mt-5 flex gap-20'>
        <label className='flex flex-col'>
          <span className='text-[15px] text-slate-400 pl-1 mb-1'>Qidiring</span>
          <Input onChange={handleSearchByName} placeholder='Qidiring...' size='large' className='!w-[350px]'/>
        </label>
        <label className='flex flex-col w-[350px]'>
          <span className='text-[15px] text-slate-400 pl-1 mb-1'>Tanlang</span>
          <FilterCustom API={'/stack'} filterId={stackId} setFilterId={setStackId} placeholder={"Stack tanlang"} extraClass={'!w-full'}/>
        </label>
      </div>
      <div className='mt-5'>
        <CustomTable isLoading={isLoading} columns={columns } data={teachers}/>
      </div>
    </div>
  )
}

export default Teachers