import { useState, useEffect } from "react";
import "../styles/IncidentTimeline.css";

const IncidentTimeline = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        // Dummy API for now; Replace with a real cybersecurity incidents API
        const response = await fetch("https://api.cyberthreats.com/incidents");
        const data = await response.json();
        setIncidents(data.incidents);
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="incident-timeline-container">
      <h2>Recent Cybersecurity Incidents</h2>
      <div className="timeline">
        {incidents.length > 0 ? (
          incidents.map((incident, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="date">{incident.date}</span>
                <h3>{incident.title}</h3>
                <p>{incident.description}</p>
                <a href={incident.source} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="loading">Loading incidents...</p>
        )}
      </div>
    </div>
  );
};

export default IncidentTimeline;
