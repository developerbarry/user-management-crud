import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import Edit from './Pages/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('https://user-crud-management-five.vercel.app/users')
      },
      {
        path: 'add-user',
        element: <AddUser />
      },
      {
        path: 'user/:id',
        element: <Edit />,
        loader: ({params}) => fetch(`https://user-crud-management-five.vercel.app/users/${params.id}`)
      }
    ]
  },

],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </StrictMode>,
)
