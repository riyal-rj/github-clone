import React from 'react'
import {FaGithub, FaUnlockAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const SignUpPage = () => {
    console.log('signup');
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold md:text-2xl text-center'>Spin up your dev hub</h1>
					<button
                      type="button"
                      className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 
                focus:ring-gray-600 font-medium rounded-lg flex gap-3 p-3 items-center w-full justify-center 
                transition-all duration-300 hover:scale-105 border border-gray-700"
                    >
                      <FaGithub className="w-5 h-5" />
                      Sign Up with GitHub
                    </button>
					<p className="text-gray-400 text-center mt-4 text-sm">
          Don’t just clone—commit to the full experience! 🔥
						<span>
							<FaUnlockAlt className="w-4 h-4 inline mx-1 text-yellow-500" />
						</span>
					</p>
					<p className="text-sm text-gray-400 mt-4 text-center">
          Reconnect to your repo—{" "}
						<Link to='/sign-in' className="font-medium text-blue-500 hover:underline transition-all duration-300">
            Sign in now!🔑
						</Link>
					</p>
				</div>
			</div>
		</div>

  )
}

export default SignUpPage