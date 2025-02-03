import React, { useState } from 'react'
import { LogoIcon } from '../../assets/icons'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import getToken from '../../hooks/getToken'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../service/getRequest'

const Login = () => {
    const { setToken } = getToken()
    const [isLoading, setIsLoading] = useState(false)
    const allUsers = getRequest("/users")

    function handleSubmitLogin(data) {
        setIsLoading(true)
        const isUser = allUsers.some(item => item.username === data.username && item.password === data.password)

        setTimeout(() => {
            if (isUser) {
                toast.success("Welcome " + data.username) 
                setIsLoading(false)
                setToken(data)
                setTimeout(() => {
                }, 500) 
            } else {
                toast.error("Noto'g'ri kiritilgan!")
                setIsLoading(false)
            }
        }, 1000)
    }

    return (
        <>
            <div className='flex items-center justify-center h-[100vh]'>
                <Toaster position="top-center" reverseOrder={false} />
                <div className='w-[360px] mx-auto'>
                    <div className='flex items-center justify-center gap-[10px] main-color mb-[25px]'>
                        <LogoIcon />
                        <span className='text-black text-[30px] font-medium'>Admin Paneli</span>
                    </div>
                    <Form onFinish={handleSubmitLogin} className='w-full text-start' autoComplete='off'>
                        <Form.Item name="username" rules={[{ required: true, message: 'Username kiritish shart!' }]}>
                            <Input size='large' prefix={<UserOutlined />} placeholder="Login" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Parol kiritish shart!' }]}>
                            <Input size='large' prefix={<LockOutlined />} type="password" placeholder="Parol" />
                        </Form.Item>
                        <Button loading={isLoading} htmlType='submit' type='primary' className='w-full' size='large'>Kirish</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login
