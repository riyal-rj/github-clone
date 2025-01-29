import { Route, Routes } from 'react-router-dom'

import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import LikesPage from './pages/LikesPage'

import Sidebar from './components/Sidebar'
function App() {
 

  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/likes" element={<LikesPage/>}/>
      </Routes>

    </div>
  )
}

export default App
