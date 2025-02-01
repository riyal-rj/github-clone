import React from 'react'
import { use } from 'react'
import { MdLogout } from 'react-icons/md'
import { useAuthContext } from '../context/auth.context';
import toast from 'react-hot-toast';

const Logout = () => {

  const {authUser,setAuthUser}=useAuthContext();
  console.log(authUser);
  const handleLogout=async()=>{
    try {
      const res=await fetch(`/api/auth/logout`,{credentials:"include"});
      const data=await res.json();
      console.log(data);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <>
      <div className="flex-grow"></div>
      <img
        src={authUser.avatarUrl}
        className='w-10 h-10 rounded-full border border-gray-800'
        alt='User Avatar'
      />
      <div
        className="cursor-pointer flex items-center gap-3 px-4 py-2 rounded-xl 
  bg-gray-800 border border-gray-700 shadow-md 
  transition-all duration-300 hover:bg-red-600 hover:border-red-500 
  hover:shadow-md hover:scale-105"

      onClick={handleLogout}
      >
        <MdLogout size={22} className="text-white" />
      </div>
    </>
  )
}

export default Logout