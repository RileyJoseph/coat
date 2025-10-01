import React from "react";

interface Show {
  date: string;
  location: string;
  city: string;
  time: string;
  past: boolean;
}

const shows: Show[] = [
  // { date: "April 25", location: "Norman Music Festival", city: "West Stage", time: "7:00", past: true },
  { date: "Oct. 18th", location: "Uptown Outside", city: "Oklahoma City, OK", time: "9:00 PM", past: false },
  { date: "Nov. 1st", location: "51st SpeakEasy", city: "Oklahoma City, OK", time: "9:00 PM", past: false },
  { date: "Nov. 7th", location: "612 in Paseo", city: "Oklahoma City, OK", time: "7:00 PM", past: false }
];

const Live: React.FC = () => {
  return (
    <div id="live" className="live flex items-center , pulse-border">
      <h2 className="mt-32">Upcoming Shows:</h2>
      <div className="shows">
        <ul className="mt-8">
          {shows.map((show, index) => (
            <li className="pointer" key={index}>
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
