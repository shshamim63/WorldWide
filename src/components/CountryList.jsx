import Loader from "./Loader";
import CountryItem from "./CountryItem";
import Message from "./Message";
import useCities from "../hooks/useCities";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Loader />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const counties = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);

  return (
    <ul className="countrylist-container">
      {counties.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};

export default CountryList;
