import { formatDate } from "../helper/date";

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;
  return (
    <li className="city-info-container">
      <span className="emoji">{emoji}</span>
      <h3 className="city-name">{cityName}</h3>
      <time className="city-date">({formatDate(date)})</time>
      <button className="city-delete-button">&times;</button>
    </li>
  );
};

export default CityItem;
