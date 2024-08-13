import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <div className="App">
        <ClockHeading />
        <ClockSlogan></ClockSlogan>
        <ClockTime></ClockTime>
      </div>
    </center>
  );
}

export default App;
