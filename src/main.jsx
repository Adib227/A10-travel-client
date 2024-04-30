import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layouts/Root.jsx';
import AllTouristSpot from './pages/AllTouristSpot/AllTouristSpot.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home/Home.jsx';
import Errorpage from './pages/Errorpage/Errorpage.jsx';
import AddTouristSpot from './pages/AddTouristSpot/AddTouristSpot.jsx';
import MyList from './pages/MyList/MyList.jsx';

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
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: '/myList',
        element: <MyList></MyList>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
