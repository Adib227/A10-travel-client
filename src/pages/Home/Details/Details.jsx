import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AllTouristSpotCard from '../../AllTouristSpot/AllTouristSpotCard';

const Details = () => {
  const more = useLoaderData();
  console.log(more);

  return (
    <div>
      {more.map(extra => {
        <AllTouristSpotCard key={extra._id} extra={extra}></AllTouristSpotCard>;
      })}
    </div>
  );
};

export default Details;
