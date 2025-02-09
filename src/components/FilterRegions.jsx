import { Select } from 'antd'
import React from 'react'
import getRequest from '../service/getRequest'

const FilterRegion = ({regionId, setRegionId, extraClass}) => {
    const stack = getRequest("/regions")
    const options = stack.map(item => ({label:item.name, value:item.id}))
    

  return (
    <Select
        value={regionId}
        onChange={(value) => setRegionId(value)}
        className={`w-[350px] ${extraClass}`}
        size='large'
        allowClear
        showSearch
        placeholder="Viloyat"
        optionFilterProp="label"
        options={options}
  />
  )
}

export default FilterRegion