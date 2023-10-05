const CountryItem = ({ country }) => {
  return (
    <li className="country-item">
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
