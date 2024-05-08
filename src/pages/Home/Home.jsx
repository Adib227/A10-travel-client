import { Helmet } from 'react-helmet';
import Banner from './Banner';
import Extra from './Extra';
import Extratwo from './Extratwo';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>IQONIC TRAVEL - Home</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <Banner></Banner>
        <Extra></Extra>
      </div>
      <div className="max-w-fulls">
        <Extratwo></Extratwo>
      </div>
    </div>
  );
};

export default Home;
