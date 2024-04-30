import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const Root = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
