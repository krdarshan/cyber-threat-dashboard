import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/ThreatMap.css";

const ThreatMap = () => {
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThreatData = async () => {
      try {
        // Dummy API for now; Replace with a real cyber threat API
        const response = await fetch("https://api.cyberthreats.com/threats");
        const data = await response.json();
        setThreats(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching threat data:", error);
        setLoading(false);
      }
    };

    fetchThreatData();
  }, []);

  return (
    <div className="threat-map-container">
      <h2>Live Cyber Threat Map</h2>

      {loading ? (
        <p className="loading-text">Loading threat data...</p>
      ) : (
        <MapContainer center={[20, 0]} zoom={2} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {threats.length > 0 ? (
            threats.map((threat, index) => (
              <Marker key={index} position={[threat.lat, threat.lng]}>
                <Popup>
                  <strong>Attack Type:</strong> {threat.type} <br />
                  <strong>Origin:</strong> {threat.origin} <br />
                  <strong>Target:</strong> {threat.target}
                </Popup>
              </Marker>
            ))
          ) : (
            <p className="no-data">No threats detected.</p>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default ThreatMap;
