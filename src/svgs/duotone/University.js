import * as React from "react";

function SvgUniversity(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M160 192v192h64V192h64v192h64V192h64v192h36a12 12 0 0112 12v20H48v-20a12 12 0 0112-12h36V192z"
        opacity={0.4}
      />
      <path
        d="M491.06 120.61l-232-88a8 8 0 00-6.12 0l-232 88A8 8 0 0016 128v16a8 8 0 008 8h24v12a12 12 0 0012 12h392a12 12 0 0012-12v-12h24a8 8 0 008-8v-16a8 8 0 00-4.94-7.39zM472 432H40a24 24 0 00-24 24v16a8 8 0 008 8h464a8 8 0 008-8v-16a24 24 0 00-24-24z"
        className="university_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUniversity;
