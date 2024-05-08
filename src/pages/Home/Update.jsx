import Tippy from '@tippyjs/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const spott = useLoaderData();
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
    _id,
  } = spott;

  const handleUpdateSpot = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const visitor = form.visitor.value;
    const time = form.time.value;

    const updatedSpot = {
      name,
      spot,
      country,
      location,
      description,
      photo,
      cost,
      seasonality,
      visitor,
      time,
    };
    console.log(updatedSpot);

    fetch(`http://localhost:5000/touristSpot/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Spot Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Thank you',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>IQONIC TRAVEL - Update</title>
      </Helmet>
      <div>
        {' '}
        <section
          className=" dark:bg-gray-300 dark:text-gray-900 "
          data-aos="zoom-in"
          data-aos-duration="1300"
        >
          <div className="text-center dark:bg-gray-300 dark:text-gray-900 ">
            <h1 className="text-violet-700 text-4xl pt-6 font-semibold animate__animated animate__bounceInLeft">
              Update Tourist Spot
            </h1>
          </div>
          <form
            onSubmit={handleUpdateSpot}
            noValidate=""
            action=""
            className="py-8 container flex flex-col mx-auto"
          >
            <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-200 ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-16 py-6">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="spot" className="text-sm">
                    Spot Name
                  </label>
                  <input
                    id="spot"
                    type="text"
                    defaultValue={spot}
                    placeholder="Spot name"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="country" className="text-sm">
                    Country Name
                  </label>
                  <input
                    id="country"
                    type="text"
                    defaultValue={country}
                    placeholder="Country name"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="location" className="text-sm">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    defaultValue={location}
                    placeholder="location"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="description" className="text-sm">
                    Short Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    defaultValue={description}
                    placeholder=""
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="photo" className="text-sm">
                    Photo URL
                  </label>
                  <input
                    id="photo"
                    type="text"
                    defaultValue={photo}
                    placeholder="photo"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="cost" className="text-sm">
                    Average Cost
                  </label>
                  <input
                    id="cost"
                    type="text"
                    defaultValue={cost}
                    placeholder="e.g 10000"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="seasonality" className="text-sm">
                    Seasonality
                  </label>
                  <input
                    id="seasonality"
                    type="text"
                    defaultValue={seasonality}
                    placeholder=""
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="time" className="text-sm">
                    Travel Time
                  </label>
                  <input
                    id="time"
                    type="text"
                    defaultValue={time}
                    placeholder=""
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="visitor" className="text-sm">
                    Total Visitors Per Year
                  </label>
                  <input
                    id="visitor"
                    type="text"
                    defaultValue={visitor}
                    placeholder="e.g 25000"
                    className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <Tippy
                  content="To update, Click here! "
                  className="text-white bg-slate-700 p-4 rounded-lg"
                >
                  <button className="btn btn-success mt-8 w-80">Update</button>
                </Tippy>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
