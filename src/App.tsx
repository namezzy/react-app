import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="app">
      <div className="alert">
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello Alert！！！
          </Alert>
        )}
      </div>
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Button
      </Button>
    </div>
  );
}
export default App;
