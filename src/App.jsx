import { Container } from "react-bootstrap";

import Header from "./components/Header";

function App() {
  return (
    <Container fluid className="main-container p-3">
      <div className="content-container">
        <Header />
      </div>
    </Container>
  );
}

export default App;
