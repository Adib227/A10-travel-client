import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllTouristSpotCard = ({ place }) => {
  const { photo, country, time, seasonality, cost, spot, visitor, _id } = place;

  return (
    <div className="">
      <div
        className="max-w-6xl mx-auto p-6"
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        <Helmet>
          <title>IQONIC Travel - All Spot</title>
        </Helmet>{' '}
        <div className="bg-base-300 shadow-xl grid  md:flex lg:grid-cols-2">
          <div>
            <img className="w-96 p-4" src={photo} alt="" />
          </div>
          <div className="card-body">
            <h2 className="text-xl font-medium">Tourist spot name: {spot}</h2>
            <h2 className="text-xl font-medium"> Country : {country}</h2>
            <h2 className="text-xl font-medium">
              {' '}
              Seasonality : {seasonality}
            </h2>
            <h2 className="text-xl font-medium">
              {' '}
              Total visitor per year : {visitor}
            </h2>
            <h2 className="text-xl font-medium"> Travel time : {time}</h2>
            <h2 className="text-xl font-medium">Average Cost : {cost}</h2>
            <div className="card-actions">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpotCard;
