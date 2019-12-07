import React from "react";

function ReactIcon() {
  return (
    <div className="technology-icon">
      <svg viewBox="0 0 180 180">
        <g transform="translate(92 83)">
          <circle fill="#61DBFB" r="16" />
          <g fill="none" stroke="#61DBFB" strokeWidth="8">
            <ellipse rx="84" ry="32" />
            <ellipse rx="84" ry="32" transform="rotate(120)" />
            <ellipse rx="84" ry="32" transform="rotate(60)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ReactIcon;
