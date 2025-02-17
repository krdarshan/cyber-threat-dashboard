import { NavLink } from "react-router-dom";
import { Home, ShieldAlert, Settings, Moon } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Cyber Threat</h2>
      <nav>
        <NavLink to="/" className="nav-item">
          <Home size={20} /> Dashboard
        </NavLink>
        <NavLink to="/threats" className="nav-item">
          <ShieldAlert size={20} /> Threats
        </NavLink>
        <NavLink to="#" className="nav-item">
          <Moon size={20} /> Theme
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
