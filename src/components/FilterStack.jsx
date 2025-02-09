import { Select } from 'antd'
import React from 'react'
import getRequest from '../service/getRequest'

const FilterStack = ({stackId, setStackId, extraClass}) => {
    const stack = getRequest("/stack")
    const options = stack.map(item => ({label:item.name, value:item.id}))
    

  return (
    <Select
        value={stackId}
        onChange={(value) => setStackId(value)}
        className={`w-[350px] ${extraClass}`}
        size='large'
        allowClear
        showSearch
        placeholder="Stack tanlang"
        optionFilterProp="label"
        options={options}
  />
  )
}

export default FilterStack