import Loader from "./Loader";
import CityItem from "./CityItem";
import Message from "./Message";
import useCities from "../hooks/useCities";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Loader />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className="citylist-container">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
