import { Link } from "react-router-dom";
import { formatDate } from "../helper/date";
import useCities from "../hooks/useCities";

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  const { currentCity, deleteCity } = useCities();

  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`city-item-container ${
          id === currentCity.id ? "recently-visited" : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="emoji">{emoji}</span>
        <h3 className="city-name">{cityName}</h3>
        <time className="city-date">({formatDate(date)})</time>
        <button className="city-delete-button" onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
