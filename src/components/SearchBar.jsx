import React, { useContext } from 'react'
import { AppContext } from '../context'

const SearchBar = () => {
  const {inputValue, setInputValue} = useContext(AppContext)
  return (
    <div className='w-auto h-8 border-1 border-amber-50 rounded-xl overflow-hidden text-white'>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
               className='h-full w-[140px] focus:w-[180px] focus: outline-0 p-2 rounded-xl transition-all' /> 
    </div>
  )
}

export default SearchBar
