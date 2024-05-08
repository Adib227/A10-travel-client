import React from 'react';

const DetailsCard = ({ extra }) => {
  const {
    photo,
    description,
    country,
    location,
    time,
    seasonality,
    cost,
    spot,
    visitor,
  } = extra;

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

export default DetailsCard;
