
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/layoutmain'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: '*',
  },
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
])
function App() {

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
