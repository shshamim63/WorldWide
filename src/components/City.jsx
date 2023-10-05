import { useParams, useSearchParams } from "react-router-dom";

const City = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      <h1>City {id}</h1>
      <p>
        position {lat}, {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change Position
      </button>
    </div>
  );
};

export default City;
