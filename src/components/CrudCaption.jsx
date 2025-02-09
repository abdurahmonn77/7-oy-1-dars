import { Button } from 'antd'
import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const CrudCaption = ({icon, actionName, CrudName, isLoading}) => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <button type='button' onClick={() => navigate(-1)} className='cursor-pointer hover:scale-[1.1]'><BiLeftArrow className='text-[20px]'/></button>
                <h2 className='font-bold text-[25px]'>{CrudName}</h2>
            </div>
            <Button loading={isLoading} htmlType='submit' icon={icon} type='primary' size='large' className=''>{actionName}</Button>
        </div>
  )
}

export default CrudCaption