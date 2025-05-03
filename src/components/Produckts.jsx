import React from 'react'
import img from '../assets/snikers.jpg'
import heart from '../assets/heart.png'
import cart from '../assets/cart.png'

const Produckts = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
     <h1 className='text-white text-4xl font-bold'>Produckts</h1>

     <div className="flex justify-around items-center max-w-[1200px] m-0 mx-auto">
          <div className="w-[350px] h-[480px] bg-[#CBCBCB] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#727272] bg-[#A5A5A5]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>
          <div className="w-[350px] h-[480px] bg-[#5CA7FF] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#000000] bg-[#FFC700]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>
          <div className="w-[350px] h-[480px] bg-[#D083FF] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#000000] bg-[#00FFB2]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>

 

     </div>
     <div className="flex justify-around items-center max-w-[1200px] m-0 mx-auto mt-10">
          <div className="w-[350px] h-[480px] bg-[#FF99E2] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#000000] bg-[#FFF500]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>
          <div className="w-[350px] h-[480px] bg-[#C5C1C7] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#000000] bg-[#00FFB2]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>
          <div className="w-[350px] h-[480px] bg-[#5CFF62] rounded-[20px] shadow-custom">
               <img className='transform rotate-270 ml-[55px] border-2 rounded-[25px] border-[#727272] w-[240px] h-auto ' src={img} alt="" />
               <img className='absolute top-[80px]' src={heart} alt="" />
               <div className="ml-[32px]">
               <p className='font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</p>
               <p className='font-bold'>$89.99</p>
               <p>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</p>
               </div>
               <button className='px-[30px] py-[10px] rounded-[25px] mt-[10px] ml-[30px] flex justify-around items-center gap-2 border-t-2 border-r-2 border-b-8 border-l-2 border-solid border-[#000000] bg-[#FFC700]'>
                    <img className='w-[30px]' src={cart} alt="" /> Add to cart
               </button>
          </div>

 

     </div>

    </div>
  )
}

export default Produckts