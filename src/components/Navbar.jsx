import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'




const Navbar = () =>{

    const [nav, setNav] = useState(true);
    console.log(nav)

    return(
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={()=> setNav(!nav)} className="cursor-pointer"> 
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2"> 
                    Best<span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex iteams-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>


            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[400px]">
                <AiOutlineSearch size={20}/>
                <input type="text" placeholder="Search foods" className="placeholder:italic bg-transparent p-2 focus:outline-none "/>
            </div>
            
                <button className="bg-black text-white hidden md:flex items-center py-2  rounded-full">
                    <BsFillCartFill className='mr-2' size={20}/> Card
                </button>
            

                {!nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-900"></div> : ''}
                <div className={'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'} style={{left: nav? '-9999px' : ''}}>
                    <AiOutlineClose onClick={()=> setNav(!nav)} size={30}  className=" absolute right-4 top-4 cursor-pointer"/>
                    <h2 className="text-2xl p-4">Best 
                    <span className="font-bold">Eats</span></h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='flex py-4 text-xl first:pt-2'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                            <li className='flex py-4 text-xl '><MdFavorite size={25} className='mr-4'/>Favourites</li>
                            <li className='flex py-4 text-xl '><FaWallet size={25} className='mr-4'/>Wallet</li>
                            <li className='flex py-4 text-xl '><MdHelp size={25} className='mr-4'/>Help</li>
                            <li className='flex py-4 text-xl '><AiFillTag size={25} className='mr-4'/>Promotions</li>
                            <li className='flex py-4 text-xl '><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                            <li className='flex py-4 text-xl last:pb-2'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar;