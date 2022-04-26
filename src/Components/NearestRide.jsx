import { useEffect, useState } from "react";
import axios from "axios";
import "./Nearest.css";

export const Nearest = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then(({ data }) => {
      setState(data);
    });
  }, []);
  console.log("data", state);

  return (
    <div>
      {state.map((el) => {
        return (
          <div className="container">
            <div className="img">
              <img src={el.map_url} alt="" />
            </div>
            <div className="content">
              <span>{el.state}</span>
              <span>{el.city}</span>
              <p>Ride id: {el.destination_station_code}</p>
              <p>Origin Station: {el.origin_station_code}</p>
              <p>Date: {el.date}</p>
              <p>
                Distance: {el.destination_station_code - el.origin_station_code}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
