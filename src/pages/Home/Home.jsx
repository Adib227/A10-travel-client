import Banner from './Banner';
import Extra from './Extra';
import Extratwo from './Extratwo';

const Home = () => {
  return (
    <div>
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
