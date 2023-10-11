import { useEffect, useState } from "react";
import axios from "axios";

import { Form, Stack } from "react-bootstrap";
import DatePicker from "react-datepicker";

import { useUrlPosition } from "../hooks/useUrlPosition";

import { convertToEmoji } from "../helper/country";

import Button from "./Button";
import BackButton from "./BackButton";
import Loader from "./Loader";

const BASE_GEO_LOCATION_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

const CityForm = () => {
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    async function fetchCityData() {
      try {
        setGeoError("");
        setIsLoadingGeoCoding(true);
        const res = await axios.get(
          `${BASE_GEO_LOCATION_URL}?latitude=${lat}&longitude=${lng}`
        );

        const { countryName, city, locality, countryCode } = res.data;

        if (!countryCode)
          throw new Error(
            "This doesn't seem to be a city, please select again"
          );

        setCityName(city || locality);
        setCountry(countryName);
        setEmoji(convertToEmoji(countryCode));
      } catch (error) {
        setGeoError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    if (lat && lng) fetchCityData();
  }, [lat, lng]);

  const handleNoteChange = (e) => {
    setNotes(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoadingGeoCoding) return <Loader />;
  if (!isLoadingGeoCoding && geoError) {
    return (
      <div className="error-container">
        <p className="error-context">{geoError}</p>
      </div>
    );
  }

  if (!isLoadingGeoCoding && !lat && !lng) {
    return (
      <div className="error-container">
        <p className="error-context">Start by clicking on the map</p>
      </div>
    );
  }
  return (
    <Form className="d-flex flex-column city-form" onSubmit={handleOnSubmit}>
      <Form.Group
        controlId="countryName"
        className="d-flex flex-column position-relative input"
      >
        <Form.Label>City name</Form.Label>
        <Form.Control
          type="text"
          className="input-control"
          value={cityName}
          onChange={(e) => setCountry(e.target.value)}
        />
        <span className="position-absolute top-0 end-0 flag">{emoji}</span>
      </Form.Group>
      <Form.Group className="d-flex flex-column position-relative input">
        <Form.Label>When did you go to {cityName}?</Form.Label>
        <DatePicker
          className="date-picker input-control"
          dateFormat="dd/MM/yyyy"
          selected={currentDate}
          onChange={(date) => setCurrentDate(date)}
        />
      </Form.Group>
      <Form.Group className="d-flex flex-column position-relative input">
        <Form.Label>Notes about your trip to {country}</Form.Label>
        <Form.Control
          as="textarea"
          className="input-control"
          value={notes}
          onChange={handleNoteChange}
        />
      </Form.Group>
      <Stack direction="horizontal">
        <Button type=" btn-primary" onClick={handleOnSubmit}>
          Add
        </Button>
        <BackButton />
      </Stack>
    </Form>
  );
};

export default CityForm;
