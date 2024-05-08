import { useLoaderData } from 'react-router-dom';
import MyListForm from './MyListForm';
import { useState } from 'react';

const MyList = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  return (
    <>
      <h1 className="text-5xl font-bold text-center">My List</h1>
      {spots.map(list => (
        <MyListForm
          key={list._id}
          list={list}
          spots={spots}
          setSpots={setSpots}
        ></MyListForm>
      ))}
    </>
  );
};

export default MyList;
