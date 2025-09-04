import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>NexTrace</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/training">Treinamentos</Link>
          </li>
          <li>
            <Link to="/alerts">Alertas</Link>
          </li>
          <li>
            <Link to="/identity">Identidade</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
