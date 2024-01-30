import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import NewPost from './routes/NewPost.tsx'
import Post from './routes/Post.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost />
      },
      {
        path: '/posts/:id',
        element: <Post />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
