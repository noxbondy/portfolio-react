import { useEffect, useState } from "react";
import axios from "axios";

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);
  const apiEndpoint = "http://localhost:9091/api/ads";

  useEffect(() => {
  const fetchAllAds = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      if (response.status === 200) {
        console.log("Fetched ads:", response.data);  // <-- add this
        setAds(response.data);
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Failed to load ads.");
      }
    } catch (error) {
      console.error("Error occurred during the API call:", error);
      setError("Unable to fetch ads from the server.");
    }
  };

  fetchAllAds();
}, []);

  const deleteAdsById = async (id) => {
    try {
      const response = await axios.delete(`${apiEndpoint}/${id}`);
      if (response.status === 200 || response.status === 204) {
        console.log("Ad deleted successfully");
        // Remove the deleted ad from state
        setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
      } else {
        console.warn("Unexpected response:", response.status);
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ad List</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      <div className="table">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Expiration Date</th>
              <th>Posted By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ads.length === 0 && !error ? (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              ads.map((ad, index) => (
                <tr key={ad._id}>
                  <td>{index + 1}</td>
                  <td>{ad.title}</td>
                  <td>{ad.description}</td>
                  <td>{ad.expirationDate}</td>
                  <td>{ad.postBy}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => deleteAdsById(ad._id)} // ✅ CORRECT usage
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ads;