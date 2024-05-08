import { Link, useLoaderData } from 'react-router-dom';
import 'animate.css';

const Details = () => {
  const more = useLoaderData();
  console.log(more);

  return (
    <>
      <h1 className="animate__animated animate__bounceInLeft  text-4xl text-center font-bold text-cyan-600">
        Details Infotmation
      </h1>
      <div>
        {/* {more.map(extra => {
        <AllTouristSpotCard key={extra._id} extra={extra}></AllTouristSpotCard>;
      })} */}
        <div
          className="my-12 max-w-7xl mx-auto bg-base-300 shadow-xl grid md:grid lg:flex"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div>
            <img
              className="mt-0 lg:mt-0 ml-0 lg:ml-0 p-4"
              src={more.photo}
              alt=""
            />
          </div>
          <div className="card-body">
            <h2 className="text-lg font-normal">
              Tourist spot name:{' '}
              <span className="text-xl font-bold">{more.spot}</span>
            </h2>
            <h2 className="text-lg font-normal">
              Tourist spot name:{' '}
              <span className="text-xl font-semibold">{more.description}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Country :{' '}
              <span className="text-xl font-semibold">{more.country}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Seasonality :{' '}
              <span className="text-xl font-semibold">{more.seasonality}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Total visitor per year :{' '}
              <span className="text-xl font-semibold">{more.visitor}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Travel time :{' '}
              <span className="text-xl font-semibold">{more.time}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Travel time :{' '}
              <span className="text-xl font-semibold">{more.location}</span>
            </h2>
            <h2 className="text-lg font-normal">
              Average Cost :{' '}
              <span className="text-xl font-semibold">{more.cost}</span>
            </h2>
            <Link to="/">
              <button className="btn btn-success w-full">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
