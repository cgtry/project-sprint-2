import logo from "./logo.svg";
import "./App.css";
import { Alert, Button } from "bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2">React Bootstrap</h1>

      <input type="button" className="btn btn-secondary" value="Basic Button" />
      <Button variant="secondary">React Bootstrap Button</Button>

      <div className="alert alert-primary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        officiis.
      </div>

      <Alert variant="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
    </div>
  );
}

export default App;
