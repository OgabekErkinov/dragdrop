import { forwardRef } from 'react';

const Card = forwardRef(({ id, orders, state, onDragStart }, ref) => {
  return (
    <div draggable ref={ref}
         onDragStart={(e) => onDragStart(e, id)}
         className='h-auto w-full flex flex-col overflow-hidden rounded-xs p-1 bg-white transition-transform duration-300 ease-in-out transform hover:scale-[1.02]'>

        {/* card header : id , price and paying systems */}
        <div className='h-10 w-full flex justify-between p-0.5'>
            <span>ID : {id}</span>
            <span className='flex gap-0.5'>
              <span className='flex gap-0.5'>{state} $</span>
              <span className='flex gap-0.5'>
                <img src="https://play-lh.googleusercontent.com/nwvxCuPFM4XpFto7gaqYXvbzyASONi9-3bKNRtvEkCHFrk-UEl1RtIZy6UaNDSCemg"
                     alt="payme" className='h-full w-8' />
                <img src="https://cdn-icons-png.freepik.com/256/3133/3133163.png?semt=ais_hybrid" alt="store" 
                     className='h-full w-8'/>
              </span>

            </span>
            

        </div>

        {/* divider */}
        <div className='h-0.5 w-full bg-gray-400'></div>

        {/* orders */}
        <div className='w-full h-28 flex flex-col items-start p-2'>
            {
                orders?.map((order, idx) => {
                    return (
                        <p key={idx}>{order}</p>
                    )
                })
            }

        </div> 
        
         {/* divider */}
         <div className='h-0.5 w-full bg-gray-400'></div>
         {/* buttons */}
         {
            state === 'new' &&
                 <div className='w-full h-12 flex justify-around items-center'>
                   <button className='h-8 w-[40%] border-1 border-red-500 text-red-500 rounded-xl'>Close</button>
                   <button
                    className='h-8 w-[40%] border-1 border-green-500 text-green-500 rounded-xl'>Accept</button>
                 </div>
         }
         {
            state === 'pending' &&
                 <div className='w-full h-12 flex justify-around items-center'>
                   <button className='h-8 w-[80%] border-1 border-blue-500 text-blue-500 rounded-xl'>Ready</button>
                 </div>
         }
         {
            state === 'ready' &&
                 <div className='w-full h-12 flex justify-around items-center'>
                   <button className='h-8 w-[80%] border-1 border-blue-500 text-blue-500 rounded-xl'>Finish</button>
                 </div>
         }
         {
            state === 'to deliver' &&
                 <div className='w-full h-12 flex justify-around items-center'>
                 </div>
         }

    </div>
  )
})

export default Card
