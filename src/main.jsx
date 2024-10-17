import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Roots from './components/Root/Roots.jsx'
import Book from './components/Book/Book.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Book></Book>
      },
      {
        path: '/details/:id',
        loader: ({params}) => fetch(`https://gutendex.com/books/${params.id}`),
        element: <BookDetails></BookDetails>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
