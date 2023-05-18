import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './Error'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/:displayName?',
    element: <App />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
