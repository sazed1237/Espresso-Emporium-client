import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Layout from './Layout.jsx';
import DetailsCoffee from './components/DetailsCoffee.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-peach-theta.vercel.app/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,

      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-peach-theta.vercel.app/coffee/${params.id}`)
      },
      {
        path: "details/:id",
        element: <DetailsCoffee></DetailsCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-peach-theta.vercel.app/coffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
