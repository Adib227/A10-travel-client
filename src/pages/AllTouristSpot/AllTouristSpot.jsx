import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import 'animate.css';
import AllTouristSpotCard from './AllTouristSpotCard';

const AllTouristSpot = () => {
  const spots = useLoaderData();
  console.log(spots);

  return (
    <>
      <h1 className="animate__animated animate__bounceInLeft text-center text-4xl  py-12 font-bold text-pink-500">
        All Tourist Page
      </h1>
      {spots.map(place => (
        <AllTouristSpotCard key={place._id} place={place}></AllTouristSpotCard>
      ))}
      {/* <AllTouristSpotCard></AllTouristSpotCard> */}
    </>
  );
};

export default AllTouristSpot;
