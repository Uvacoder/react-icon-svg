import * as React from "react";

function SvgFirstAid(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path d="M64 480h64V32H64zM448 32v448h64V32z" opacity={0.4} />
      <path
        d="M128 480h320V32H128zm64-248a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8v48a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8zM0 80v352a48 48 0 0048 48h16V32H48A48 48 0 000 80zm528-48h-16v448h16a48 48 0 0048-48V80a48 48 0 00-48-48z"
        className="first-aid_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFirstAid;
