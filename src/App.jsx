import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Router from "./pages/Router";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCities() {
      try {
        const res = await axios.get(`${BASE_URL}/cities`);
        setCities(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3">
        <Router cities={cities} isLoading={isLoading} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
