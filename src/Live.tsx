import React from "react";

interface Show {
  date: string;
  location: string;
  city: string;
  time: string;
}

const shows: Show[] = [
  { date: "Feb. 14", location: "The 51st St. Speakeasy", city: "Oklahoma City, OK", time: "9:00" },
  { date: "March 14th", location: "The Blue Note", city: "Oklahoma City, OK", time: "9:00" },
  { date: "May 3rd", location: "Resonant Head", city: "Oklahoma City, OK", time: "8:00" },
  { date: "June TBD", location: "The Blue Note", city: "Oklahoma City, OK", time: "9:00" }
];

const Live: React.FC = () => {
  return (
    <div id="live" className="live">
      <h2 className="mt-32">Upcoming Shows:</h2>
      <div className="shows">
        <ul className="mt-8">
          {shows.map((show, index) => (
            <li key={index}>
              <span className="date">{show.date}</span>
              <span className="location">
                {show.location}
                <span className="city">{show.city}</span>
              </span>
              <span className="time">{show.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Live;
