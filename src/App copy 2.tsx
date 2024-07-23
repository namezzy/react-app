import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert onClose={()=>console.log("hello")}> 
        Hello <span>World</span>
      </Alert>
    </div>
  );
}
export default App;
