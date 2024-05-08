import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListForm = ({ list, spots, setSpots }) => {
  const { _id, spot, country, cost, photo } = list;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristSpot/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your spot has been deleted.',
                icon: 'success',
              });
              const remaining = spots.filter(spot => spot._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        {/* <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2> */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            {/* <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup> */}
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">ID #</th>
                <th className="p-3">Spot Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-right">Update</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p className="text-lg font-medium">{_id}</p>
                </td>
                <td className="p-3">
                  <p className="text-xl font-semibold">{spot}</p>
                </td>
                <td className="p-3">
                  <p className="text-lg font-normal">{country}</p>
                  {/* <p className="dark:text-gray-600">Friday</p> */}
                </td>
                <td className="p-3">
                  <p className="text-lg font-normal">{cost}</p>
                  {/* <p className="dark:text-gray-600">Tuesday</p> */}
                </td>
                <td className="p-3 text-right">
                  <Link to={`/updatePage/${_id}`}>
                    <button className="btn bg-blue-600 text-white">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Tesla Inc.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$275</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr> */}
              {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Coca Cola co.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$8,950,500</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr> */}
              {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListForm;
