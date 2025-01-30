import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
      <div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold  md:text-2xl text-center'>Log in to your dev space 🚀💻</h1>

          <button
            type="button"
            className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 
			focus:ring-gray-600 font-medium rounded-lg flex gap-3 p-3 items-center w-full justify-center 
			transition-all duration-300 hover:scale-105 border border-gray-700"
          >
            <FaGithub className="w-5 h-5" />
            Sign In with GitHub
          </button>

          <p className="text-gray-400 text-center mt-4 text-sm">
          New to the dev world?{" "}
            <Link to="/sign-up" className="font-medium text-blue-500 hover:underline transition-all duration-300">
              Sign Up🔓
            </Link>
          </p>
        </div>
      </div>
    </div>

      )
}

      export default SignInPage