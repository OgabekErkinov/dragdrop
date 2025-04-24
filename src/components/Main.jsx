import React, { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import { datas } from '../db'
import Card from './Card'
import FlipMove from 'react-flip-move';
import { AppContext } from '../context';


const Main = () => {
  const { inputValue } = useContext(AppContext)
  const [items, setItems] = useState(datas); // bu doimiy o'zgaradigan holat
  const types = [...new Set(datas.map(data => data.state))]; // bu bloklar qat'iy, doimiy qoladi
  const [hoveredType, setHoveredType] = useState(null);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };
  

  const onDrop = (e, newState) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");

    setItems(prev =>
      prev.map(item =>
        item.id === +id ? { ...item, state: newState, createdAt : new Date()} : item
      )
    );
    setHoveredType(null)
  };

  const onDragOver = (e, type) => {
    e.preventDefault();
    if (hoveredType !== type) {
      setHoveredType(type);
    }
  };

  return (
    <div className='h-full w-full rounded-sm bg-gray-500 box-border '>
      <div className='h-8 w-full flex justify-between items-center p-8 border-b-[1px] z-10 border-white fixed bg-gray-500'>
        <SearchBar />
      </div>

      {/* main section */}
      <div className='h-full w-full grid grid-cols-4 gap-1 pt-18 px-2 overflow-x-auto'>
        {
          types.map((type, idx) => (
            <div
              key={idx}
              onDrop={(e) => onDrop(e, type)}
              onDragOver={(e) => onDragOver(e, type)}

              className='h-auto w-full flex flex-col gap-2 p-1'
            >
              <div className='w-full h-12 bg-green-700 rounded-t-xl p-2 text-white'>
                {type}
              </div>
              <div className={`transition-all duration-300 overflow-hidden bg-white/20 rounded-xl
                    ${hoveredType === type ? 'h-50' : 'h-0'} `}/>
              {
                items
                  .filter(item => item.state === type && item.id.toString().includes(inputValue)) 
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(item => (
                    <Card
                      key={item.id}
                      id={item.id}
                      orders={item.orders}
                      state={item.state}
                      onDragStart={onDragStart}
                    />
                  ))
              }
                
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Main
