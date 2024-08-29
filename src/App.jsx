
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Support from './pages/Support'
import LayoutsOne from './Layouts/LayoutsOne'

function App() {
  const mainroute = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element = {<LayoutsOne/>}>
        <Route path='/Features' element = {<Features/>} />
        <Route path='/pricing' element = {<Pricing/>} />
        <Route path='/support' element = {<Support/>} />
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainroute}/>

   
    </>
  )
}

export default App
