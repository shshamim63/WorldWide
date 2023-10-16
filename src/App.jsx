import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Router from "./pages/Router";
import { CitiesProvider } from "./contexts/CityContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3">
        <AuthProvider>
          <CitiesProvider>
            <Router />
          </CitiesProvider>
        </AuthProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
