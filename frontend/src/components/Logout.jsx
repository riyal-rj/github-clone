import React from 'react'
import { MdLogout } from 'react-icons/md'

const Logout = () => {
  return (
    <>
      <div className="flex-grow"></div>
      <img
        src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
        className='w-10 h-10 rounded-full border border-gray-800'
        alt='User Avatar'
      />
      <div
        className="cursor-pointer flex items-center gap-3 px-4 py-2 rounded-xl 
  bg-gray-800 border border-gray-700 shadow-md 
  transition-all duration-300 hover:bg-red-600 hover:border-red-500 
  hover:shadow-md hover:scale-105"
      >
        <MdLogout size={22} className="text-white" />
      </div>
    </>
  )
}

export default Logout