import { useState } from "react";
import "../styles/PreventionTips.css";
import { ShieldCheck, Lock, WifiOff, UserCheck } from "lucide-react";

const PreventionTips = () => {
  const [expanded, setExpanded] = useState(null);

  const tips = [
    {
      id: 1,
      icon: <ShieldCheck className="icon" />,
      title: "Use Strong Passwords",
      description:
        "Ensure your passwords are at least 12 characters long and include a mix of letters, numbers, and symbols.",
    },
    {
      id: 2,
      icon: <Lock className="icon" />,
      title: "Enable Two-Factor Authentication",
      description:
        "Always enable 2FA on your important accounts to add an extra layer of security.",
    },
    {
      id: 3,
      icon: <WifiOff className="icon" />,
      title: "Avoid Public Wi-Fi",
      description:
        "Do not access sensitive information over public Wi-Fi networks unless using a VPN.",
    },
    {
      id: 4,
      icon: <UserCheck className="icon" />,
      title: "Verify Emails & Links",
      description:
        "Be cautious of phishing emails and do not click on suspicious links.",
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="prevention-tips-container">
      <h2>Cybersecurity Prevention Tips</h2>
      <div className="tips-list">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className={`tip-item ${expanded === tip.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(tip.id)}
          >
            <div className="tip-header">
              {tip.icon}
              <h3>{tip.title}</h3>
            </div>
            {expanded === tip.id && <p className="tip-description">{tip.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreventionTips;
