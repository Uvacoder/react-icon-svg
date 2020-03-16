import * as React from "react";

function SvgBriefcaseMedical(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M192 128h-64V80a48 48 0 0148-48h160a48 48 0 0148 48v48h-64V96H192z"
        opacity={0.4}
      />
      <path
        d="M464 128H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zM352 344a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8z"
        className="briefcase-medical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBriefcaseMedical;
