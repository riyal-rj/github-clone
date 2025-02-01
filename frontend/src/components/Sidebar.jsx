import React from 'react';
import { Link } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa';
import {IoHomeSharp} from 'react-icons/io5';
import {MdOutlineExplore,MdEditDocument,MdLogout} from 'react-icons/md';
import {PiSignInBold} from 'react-icons/pi';
import Logout from './Logout';
import { useAuthContext } from '../context/auth.context';

const Sidebar = () => {
    const {authUser}=useAuthContext();
  return (
            <aside
                className='flex flex-col items-center min-w-14 sm:w-20 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r 
                bg-gradient-to-b from-gray-900/60 to-gray-800/30 backdrop-blur-xl shadow-lg border-gray-700 text-white'
            >
                <nav className='h-full flex flex-col gap-4'>
                    <Link to='/' className='flex justify-center'>
                        <img
                            className='h-10 transition-transform duration-300 hover:scale-110'
                            src='/github.svg'
                            alt='Github Logo'
                        />
                    </Link>
    
                    <Link
                        to='/'
                        className='p-2 flex justify-center transition-all duration-300 rounded-xl 
                        hover:bg-gray-800/60 hover:shadow-lg'
                    >
                        <IoHomeSharp size={22} />
                    </Link>
    
                    {authUser && (
                        <Link
                            to='/likes'
                            className='p-2 flex justify-center transition-all duration-300 rounded-xl hover:bg-gray-800/60 hover:shadow-lg'
                        >
                            <FaHeart size={22} className='text-red-400 hover:text-red-500' />
                        </Link>
                    )}
    
                    {authUser && (
                        <Link
                            to='/explore'
                            className='p-2 flex justify-center transition-all duration-300 rounded-xl hover:bg-gray-800/60 hover:shadow-lg'
                        >
                            <MdOutlineExplore size={25} className='text-blue-400 hover:text-blue-500' />
                        </Link>
                    )}
    
                    {!authUser && (
                        <Link
                            to='/sign-in'
                            className='p-2 transition-all duration-300 rounded-xl hover:bg-green-200 hover:shadow-lg'
                        >
                            <PiSignInBold size={25} className='text-green-400 hover:text-green-500' />
                        </Link>
                    )}
    
                    {!authUser && (
                        <Link
                            to='/sign-up'
                            className='p-2 transition-all duration-300 rounded-xl hover:bg-yellow-200 hover:shadow-lg'
                        >
                            <MdEditDocument size={25} className='text-yellow-400 hover:text-yellow-500' />
                        </Link>
                    )}
    
                    {authUser && <Logout />}
                </nav>
            </aside>
    
  )
}

export default Sidebar