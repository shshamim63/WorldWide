import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Router from "./pages/Router";
import { CitiesProvider } from "./contexts/CityContext";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3">
        <CitiesProvider>
          <Router />
        </CitiesProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
