import Banner from './Banner';
import Extra from './Extra';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <Slider></Slider>
      <Extra></Extra>
    </div>
  );
};

export default Home;
