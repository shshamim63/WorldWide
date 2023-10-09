import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Router from "./pages/Router";
import { CityProvider } from "./providers/CityProvider";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3">
        <CityProvider>
          <Router />
        </CityProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
