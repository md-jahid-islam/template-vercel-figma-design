import React from 'react'
import { WiTime4 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { CgExternal } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
     <div className="container">
        <div className="menu_logo">
        <WiTime4 className=' w-[40px] h-[40px] bg-[#179BAE] rounded-md mt-10 ml-[100px]' />
        <h2 className=' text-[#fff] mt-[-37px] font-bold text-2xl ml-[160px]'> SmartNotes</h2>
 
 </div>
 <div>
 <ul className=' flex justify-center items-center gap-[70px] mt-[-38px] ml-[300px]'>
 <li className=' text-[#fff] font-bold'> <Link to='/Features'> <button> Features</button></Link></li>
 <li className=' text-[#fff] font-bold'> <Link to='/Pricing'> <button> Pricing</button></Link></li>
 <li className=' text-[#fff] font-bold'> <Link to='/Support'> <button> Support</button></Link></li>
 <div>
  <Link to='#'> <button className=' text-[#fff] ml-[150px] w-[220px] h-[50px] bg-[#179BAE] rounded-md hover:scale-105 transition'> Get Started</button></Link>
  <CgExternal className=' text-[#000] w-[30px] h-[30px] absolute mt-[-40px] ml-[310px] ' />

 </div>

 </ul>
 
 </div>

</div>
    
    </>
  )
}

export default Navbar