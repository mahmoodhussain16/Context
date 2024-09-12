import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Component/Layout/Layout'
import NewContact from './Pages/NewContact'
import ContactProvider from './Context/Contact/ContactProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new-contact',
        element: <NewContact/>,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactProvider>
    <RouterProvider router={router} />
    </ContactProvider>
  
  </StrictMode>
)