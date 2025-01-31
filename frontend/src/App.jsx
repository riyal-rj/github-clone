import { Route, Routes } from 'react-router-dom'

import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import LikesPage from './pages/LikesPage'

import Sidebar from './components/Sidebar'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <div className='flex'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster/>
      </div>

    </div>
  )
}

export default App
