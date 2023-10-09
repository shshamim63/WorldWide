import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCities from "../hooks/useCities";
import { Stack } from "react-bootstrap";
import Loader from "./Loader";
import { formatDate } from "../helper/date";

const City = () => {
  const { id } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Loader />;

  return (
    <div className="city-info-container">
      <Stack gap={1}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </Stack>
      <Stack gap={1}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </Stack>
      {notes && (
        <Stack gap={1}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </Stack>
      )}
      <Stack gap={1}>
        <h6>Learn More</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </Stack>
    </div>
  );
};

export default City;
