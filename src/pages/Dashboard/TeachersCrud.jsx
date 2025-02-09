import { UserAddOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import CrudCaption from '../../components/CrudCaption'
import { Input, Select } from 'antd'
import FilterCustom from '../../components/FilterCustom'
import { Create } from '../../service/auth'
import { useNavigate } from 'react-router-dom'

const TeachersCrud = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [age, setAge] = useState(null)
    const [experience, setExperience] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState("+998")
    const [study, setStudy] = useState(null)
    const [district, setDistrict] = useState(null)
    const [married, isMarried] = useState(null)

    const [stackId, setStackId] = useState(null)
    const [stack, setStack] = useState(null)
    const [regionId, setRegionId] = useState(null)
    const [region, setRegion] = useState(null)
    const [statusId, setStatusId] = useState(null)
    const [status, setStatus] = useState(null)
    const [gender, setGender] = useState(null)
    const [workCompanyId, setWorkCompanyId] = useState(null)
    const [workCompany, setWorkCompany] = useState(null)


    function handleFormSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        const data = {name, surname, age, stackId, stack, region, regionId, district, status, statusId, experience, gender, email, phone, married, study, workCompany, workCompanyId}
        Create(data, '/teachers', navigate, setIsLoading)
    }

  return (
    <form className='p-5' autoComplete='off' onSubmit={handleFormSubmit}>
        <CrudCaption isLoading={isLoading} CrudName={"Ustoz qo'shish"} actionName={"Qo'shish"} icon={<UserAddOutlined/>}/>
        <div className='flex justify-evenly mt-10'>
            <div className='w-[40%] space-y-3'>
                <Input value={name} onChange={(e) => setName(e.target.value)} allowClear name='name' size='large' placeholder='Ustoz ismi'/>
                <Input value={surname} onChange={(e) => setSurname(e.target.value)} allowClear name='surname' size='large' placeholder='Ustoz familiyasi'/>
                <Input value={age} onChange={(e) => setAge(e.target.value)} type='number' allowClear name='age' size='large' placeholder='Ustoz yoshi'/>
                <Input value={experience} onChange={(e) => setExperience(e.target.value)} allowClear name='experience' size='large' placeholder='Ustoz Tajribasi'/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' allowClear name='email' size='large' placeholder='Ustoz elektron pochtasi'/>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' allowClear name='phone' size='large' placeholder='Ustoz telefon raqami'/>
                <Input value={study} onChange={(e) => setStudy(e.target.value)} allowClear name='study' size='large' placeholder="Ustoz o'qish joyi"/>
            </div>
            <div className='w-[40%] flex flex-col gap-3'>
                <FilterCustom API={'/stack'} filterId={stackId} setFilterId={setStackId} setFilterName={setStack} placeholder={"Stack tanlang"} extraClass={'!w-full'}/>
                <FilterCustom API={'/regions'} filterId={regionId} setFilterId={setRegionId} setFilterName={setRegion} placeholder={"Viloyat tanlang"} extraClass={'!w-full'}/>
                <Input value={district} onChange={(e) => setDistrict(e.target.value)} allowClear name='district' size='large' placeholder='Yashash tumani'/>
                <FilterCustom API={'/status'} filterId={statusId} setFilterId={setStatusId} setFilterName={setStatus} placeholder={"Lavozim tanlang"} extraClass={'!w-full'}/>
                <Select  value={gender} onChange={(value) => setGender(value)} className={`w-full`} size='large'  allowClear showSearch placeholder={"Jinsini tanlang"} optionFilterProp="label" options={[{label:"Erkak", value:"Erkak"}, {label:"Ayol", value:"Ayol"}]} />
                <Input value={married} onChange={(e) => isMarried(e.target.value)} allowClear name='isMerried' size='large' placeholder='Turmush qurganmisiz'/>
                <FilterCustom mode={"multiple"} API={'/workList'} filterId={workCompanyId} setFilterId={setWorkCompanyId} setFilterName={setWorkCompany} placeholder={"Ish joyini tanlang"} extraClass={'!w-full'}/>
            </div>
        </div>
    </form>
  )
}

export default TeachersCrud