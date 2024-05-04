import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
  const [spots] = useLoaderData();
  console.log(spots);
  // spots.map(spot => (
  //   <AllTouristSpot key={spots._id} spot={spot}></AllTouristSpot>
  // ));

  return (
    <div
      className="max-w-6xl mx-auto p-8"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <Helmet>
        <title>IQONIC Travel - All Spot</title>
      </Helmet>{' '}
      <div className="bg-base-300 shadow-xl flex">
        <div>
          <img className="w-96 p-4" src={spots.photo} alt="" />
        </div>
        <div className="card-body">
          <h2 className="text-xl font-medium">
            Tourist spot name: {spots.spot}
          </h2>
          <h2 className="text-xl font-medium"> Country : {spots.country}</h2>
          <h2 className="text-xl font-medium">
            {' '}
            Seasonality : {spots.seasonality}
          </h2>
          <h2 className="text-xl font-medium">
            {' '}
            Total visitor per year : {spots.visitor}
          </h2>
          <h2 className="text-xl font-medium"> Travel time : {spots.time}</h2>
          <h2 className="text-xl font-medium">Average Cost : {spots.cost}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
