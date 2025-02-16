import "../styles/Home.css";
import ThreatLevel from "../components/ThreatLevel";
import NewsFeed from "../components/NewsFeed";
import ThreatMap from "../components/ThreatMap";
import PreventionTips from "../components/PreventionTips";
import IncidentTimeline from "../components/IncidentTimeline";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Cyber Threat News Dashboard</h1>
        <p>Stay updated with the latest cybersecurity threats and incidents worldwide.</p>
      </section>

      {/* Dashboard Grid */}
      <section className="dashboard-grid">
        <div className="main-content">
          <ThreatLevel />
          <NewsFeed />
        </div>
        <aside className="sidebar">
          <ThreatMap />
          <IncidentTimeline />
        </aside>
      </section>

      {/* Prevention Tips */}
      <section className="prevention-section">
        <PreventionTips />
      </section>
    </div>
  );
};

export default Home;
