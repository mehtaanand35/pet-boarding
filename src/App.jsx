import "./App.css";
import { NavBar } from "./Components/Navbar";
import { Nearest } from "./Components/NearestRide";
import { Route, Routes } from "react-router-dom";
import { Nav2 } from "./Components/Nav2";
import { Upcoming } from "./Components/Upcoming";
import { Past } from "./Components/Past";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Nearest />}></Route>
        <Route path="/comingRide" element={<Upcoming />}></Route>
        <Route path="/past" element={<Past />}></Route>
      </Routes>
    </div>
  );
}

export default App;
