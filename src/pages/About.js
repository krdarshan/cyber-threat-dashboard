import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Cyber Threat News Dashboard</h1>
        <p>Providing real-time cybersecurity news and threat intelligence.</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our goal is to keep individuals and organizations informed about the latest cyber threats, breaches, and
          security measures. By delivering up-to-date news, we empower users to take preventive actions and enhance
          cybersecurity awareness.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Real-time cyber threat updates</li>
          <li>Interactive threat maps</li>
          <li>Incident timelines</li>
          <li>Preventive security tips</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          Our platform aggregates cybersecurity information from trusted sources, providing categorized alerts and
          detailed insights into global threats.
        </p>
      </section>

      <section className="about-footer">
        <p>Stay informed. Stay secure.</p>
      </section>
    </div>
  );
};

export default About;
