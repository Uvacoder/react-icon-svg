import * as React from "react";

function SvgBriefcase(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M320 288h192v144c0 25.6-22.4 48-48 48H48c-25.6 0-48-22.4-48-48V288h192v48a16 16 0 0016 16h96a16 16 0 0016-16z"
        opacity={0.4}
      />
      <path
        d="M464 128h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128z"
        className="briefcase_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBriefcase;
