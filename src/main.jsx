import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layouts/Root.jsx';
import AllTouristSpot from './pages/AllTouristSpot/AllTouristSpot.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home/Home.jsx';
import Errorpage from './pages/Errorpage/Errorpage.jsx';
import AddTouristSpot from './pages/AddTouristSpot/AddTouristSpot.jsx';
import MyList from './pages/MyList/MyList.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Update from './pages/Home/Update.jsx';
import Details from './pages/Home/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/touristSpot'),
      },
      {
        path: '/details/:_id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/touristSpot/:_id'),
      },
      {
        path: '/addTouristSpot',
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/myList',
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/touristSpot'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updatePage/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristSpot/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
