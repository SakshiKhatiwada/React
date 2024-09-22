import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/contact.jsx';
import AboutUs from './components/aboutUs.jsx';
import Master from './components/master.jsx';
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    children: [
      {
        path: "/master",
        element: <Master/>
      }
    ]
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={routes} />
  </StrictMode>,
)
