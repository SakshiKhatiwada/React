import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ContactUs from './pages/contactUs';
import AllPosts from './pages/allPosts';

const routes = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path: "/contactUs",
    element: < ContactUs/>
  },
  {
    path: "/allPosts",
    element: <AllPosts/>
  }
])

function App() {

  return (
    <>
        <Header />
        <RouterProvider router={routes} />
        <Footer />
    </>
  )
}

export default App
