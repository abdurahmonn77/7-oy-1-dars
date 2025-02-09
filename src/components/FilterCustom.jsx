import { Select } from 'antd'
import React from 'react'
import getRequest from '../service/getRequest'

const FilterCustom = ({API, filterId, setFilterId, extraClass, placeholder, mode, setFilterName}) => {
    const data = getRequest(API)
    const options = data.map(item => ({label:item.name, value:item.id}))
    
  function onChange(value, data) {
    setFilterId(value)
    if(setFilterName){
      if(mode == "multiple") {
        setFilterName(data.map(item => item.label));
      }else{
        setFilterName(data.label);
      }
    }
  } 
  return (
    <Select
        mode={mode}
        value={filterId}
        onChange={onChange}
        className={`w-[350px] ${extraClass}`}
        size='large'
        allowClear
        showSearch
        placeholder={placeholder}
        optionFilterProp="label"
        options={options}
  />
  )
}

export default FilterCustom