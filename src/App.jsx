import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'

export default function mern() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/sign-up' element = {<Signup/>}/>
      <Route path='/sign-in' element = {<Signin/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
