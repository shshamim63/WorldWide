import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Router from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3">
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
