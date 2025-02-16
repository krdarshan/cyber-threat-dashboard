import { useState, useEffect } from "react";
import "../styles/ThreatLevel.css";

const ThreatLevel = () => {
  const [threatLevel, setThreatLevel] = useState("Low");

  useEffect(() => {
    const fetchThreatLevel = async () => {
      try {
        // Dummy API for now; Replace with a real cyber threat API
        const response = await fetch("https://api.cyberthreats.com/threat-level");
        const data = await response.json();
        setThreatLevel(data.level);
      } catch (error) {
        console.error("Error fetching threat level:", error);
      }
    };

    fetchThreatLevel();
  }, []);

  const getThreatClass = () => {
    switch (threatLevel) {
      case "Low":
        return "low";
      case "Moderate":
        return "moderate";
      case "High":
        return "high";
      case "Severe":
        return "severe";
      default:
        return "low";
    }
  };

  return (
    <div className="threat-level-container">
      <h2>Current Cyber Threat Level</h2>
      <div className={`threat-indicator ${getThreatClass()}`}>
        {threatLevel}
      </div>
    </div>
  );
};

export default ThreatLevel;
