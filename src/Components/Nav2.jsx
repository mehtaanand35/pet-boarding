import { Link } from "react-router-dom";
import "./Nav2.css"
export const Nav2 = () => {
  return (
    <div className="nav2">
      <Link style={{marginLeft:"10%"}} to={"/"}>Nearest Ride</Link>
      <Link to={"/comingRide"}>Upcoming Rige</Link>
      <Link to={"/past"}>Past Ride</Link>
    </div>
  );
};
