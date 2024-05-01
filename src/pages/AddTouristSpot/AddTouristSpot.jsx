import Swal from 'sweetalert2';

const AddTouristSpot = () => {
  // const Swal = require('sweetalert2');

  const handleAddSpot = event => {
    event.preventDefault;

    const form = event.target;

    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const email = form.email.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const visitor = form.visitor.value;
    const time = form.time.value;

    const newSpot = {
      name,
      country,
      location,
      email,
      description,
      cost,
      seasonality,
      visitor,
      time,
    };
    console.log(newSpot);

    fetch('http://localhost:5000/touristSpot', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.dataInsertedID) {
          Swal.fire({
            title: 'Success!',
            text: 'User Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <section className="p-6 dark:bg-gray-300 dark:text-gray-900">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-200">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <img
                alt=""
                className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://source.unsplash.com/40x40/?portrait?1"
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Country Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Country name"
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="location"
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Short Description
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Seasonality
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <button
                onSubmit={handleAddSpot}
                className="btn btn-success mt-8 w-80"
              >
                ADD
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
