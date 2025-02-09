import React from 'react'
import { instance } from "../hooks/instance"


export const Create = (data, API) => instance().post(API, data).then(() => {
  setTimeout(() => {
    setIsLoading(false)
    navigate(-1)
}, 1000)
})
