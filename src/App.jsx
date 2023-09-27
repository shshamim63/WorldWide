import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Router from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container p-3 position-relative">
        <Header />
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
