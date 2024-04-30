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
        path: '/allTOuristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
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
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
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
