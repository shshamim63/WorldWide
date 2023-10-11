/* eslint-disable no-unused-vars */
import { Form, Stack } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Button from "./Button";
import BackButton from "./BackButton";
import { useSearchParams } from "react-router-dom";

const CityForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className="d-flex flex-column city-form" onSubmit={handleOnSubmit}>
      <Form.Group
        controlId="countryName"
        className="d-flex flex-column position-relative input"
      >
        <Form.Label>Country name</Form.Label>
        <Form.Control type="text" className="input-control" />
        <span className="position-absolute top-0 end-0 flag">🎏</span>
      </Form.Group>
      <Form.Group className="d-flex flex-column position-relative input">
        <Form.Label>When did you go to X?</Form.Label>
        <DatePicker
          className="date-picker input-control"
          dateFormat="dd/MM/yyyy"
        />
      </Form.Group>
      <Form.Group className="d-flex flex-column position-relative input">
        <Form.Label>Notes about your trip to X</Form.Label>
        <Form.Control as="textarea" className="input-control" />
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
