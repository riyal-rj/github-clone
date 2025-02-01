import React, { useState } from 'react'
import { useAuthContext } from '../context/auth.context'
import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
const LikeProfile = ({ userProfile }) => {
    const { authUser } = useAuthContext();
    const [isLiked,setIsLiked]=useState(false);
    const [loading,setLoading]=useState(false);
    const ownProfile = authUser?.username === userProfile.login;

    const handleLikeProfile = async () => {
        try {
            const res=await fetch(`/api/users/like/${userProfile.login}`,{
                method:"POST",
                credentials:"include",
            });
            const data=await res.json();
            if(data.error)
                throw new Error(data.error);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    if(!authUser || ownProfile)
        return null;
    return (
        <button
            className="p-2 text-sm w-full font-semibold rounded-lg 
        bg-gradient-to-r from-red-500 to-rose-600 
        border border-red-400 shadow-md 
        flex items-center gap-2 justify-center 
        transition-all duration-300 ease-in-out 
        hover:from-rose-600 hover:to-red-500 
        hover:border-rose-500 hover:shadow-lg hover:scale-105 
        active:scale-100 focus:outline-none"
            onClick={handleLikeProfile}
        >
            <FaHeart size={18} className="text-white" /> Like Profile
        </button>

    )
}

export default LikeProfile