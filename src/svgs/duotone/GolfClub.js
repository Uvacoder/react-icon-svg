import * as React from "react";

function SvgGolfClub(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M64 205.15a64 64 0 00-64 64v26.9h120a8 8 0 018 8v32a8 8 0 01-8 8H0v48h120a8 8 0 018 8v32a8 8 0 01-8 8H0v8a64.06 64.06 0 0064 64h302.6a64 64 0 0057.7-36.26l90-187.42-438.5-82.12a64 64 0 00-11.8-1.1z"
        opacity={0.4}
      />
      <path
        d="M120 392.05H0v48h120a8 8 0 008-8v-32a8 8 0 00-8-8zm0-96H0v48h120a8 8 0 008-8v-32a8 8 0 00-8-8zM631 8.59l-14.4-6.94-.18-.09a15.91 15.91 0 00-21.22 7.49L465.55 279.24l48.76 9.13L638.4 30A16.14 16.14 0 00631 8.59z"
        className="golf-club_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGolfClub;
