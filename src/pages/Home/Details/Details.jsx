import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const one = useLoaderData();
  const { _id } = useParams();
  const [single, setSingle] = useState();
  useEffect(() => {
    const details = one.find(card => card._id == _id);
    setSingle(details);
  }, []);

  const {
    photo,
    spot,
    country,
    seasonality,
    visitor,
    time,
    cost,
    description,
    location,
  } = single;
  console.log(one);

  return (
    <div>
      <div className="bg-base-300 shadow-xl grid  md:flex lg:grid-cols-2">
        <div>
          <img className="w-96 p-4" src={photo} alt="" />
        </div>
        <div className="card-body">
          <h2 className="text-xl font-medium">Tourist spot name: {spot}</h2>
          <h2 className="text-xl font-medium">
            Tourist spot name: {description}
          </h2>
          <h2 className="text-xl font-medium"> Country : {country}</h2>
          <h2 className="text-xl font-medium"> Seasonality : {seasonality}</h2>
          <h2 className="text-xl font-medium">
            {' '}
            Total visitor per year : {visitor}
          </h2>
          <h2 className="text-xl font-medium"> Travel time : {time}</h2>
          <h2 className="text-xl font-medium"> Travel time : {location}</h2>
          <h2 className="text-xl font-medium">Average Cost : {cost}</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
