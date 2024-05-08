import { useLoaderData } from 'react-router-dom';
import MyListForm from './MyListForm';

const MyList = ({}) => {
  const spots = useLoaderData();
  console.log(spots);

  return (
    <>
      <h1 className="text-5xl font-bold text-center">My List</h1>
      {spots.map(list => (
        <MyListForm key={list._id} list={list}></MyListForm>
      ))}
    </>
  );
};

export default MyList;
