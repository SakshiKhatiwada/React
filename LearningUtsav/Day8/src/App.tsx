import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import { createBrowserRouter, Link, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import HomePage from './components/homepage';
import Contact from './components/contactUs';
import About from './components/aboutUs';

const Layout = () => {
  const loc = useLocation();
  return (
   <>
    {/* <h1> Layout </h1> */}
    <Header/>

    <section className='routes'>
    <Link to='/contact-us'className="links">Contact Us</Link>
    <Link to='/about-us' className="links">About Us</Link>
    </section>

<Outlet/>

    {loc.pathname !== '/' && <Link to='/'>Back to homepage</Link>}

    <Footer/>
    </>
  )
}

function App() {
  const routes = createBrowserRouter([
   {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <HomePage/>
      },
  
      {
        path:'/contact-us',
        element: <Contact/>
      },
  
      {
        path:'/about-us',
        element: <About/>
      }
    ]
   }


  ])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
