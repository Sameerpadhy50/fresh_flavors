import React from 'react'
import logo from "../assets/Fresh_flavors.png"
import {ImUser} from "react-icons/im";
import {TbLogin2} from "react-icons/tb"
import {FaHamburger} from "react-icons/fa"

export const Navbar = () => {
  return (
    <div className='md:w-auto md:flex md:justify-between md:px-14  md:border-2 border-black'>
        <div>
          <img src={logo} className='w-[30%]' alt="" />
        </div>
        <div>
          <ul className='flex text-center '>
            <li>Veg</li>
            <li>Non Veg</li>
            <li>Stator</li>
            <li>Dessert</li>
            <li>ORDER NOW</li>
          </ul>
        </div>
        <div className='md:flex md:text-3xl md:justify-evenly md:w-52'>
          <ImUser/>
          <TbLogin2/>
        </div>
        <div>
    <FaHamburger className='hidden sm:block'/>
        </div>
    </div>
  )
}
