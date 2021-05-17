import * as React from "react";

function SvgPause(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M144 31H48A48 48 0 000 79v352a48 48 0 0048 48h96a48 48 0 0048-48V79a48 48 0 00-48-48zm-16 368a16 16 0 01-16 16H80a16 16 0 01-16-16V111a16 16 0 0116-16h32a16 16 0 0116 16zM400 31h-96a48 48 0 00-48 48v352a48 48 0 0048 48h96a48 48 0 0048-48V79a48 48 0 00-48-48zm-16 368a16 16 0 01-16 16h-32a16 16 0 01-16-16V111a16 16 0 0116-16h32a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M112 95H80a16 16 0 00-16 16v288a16 16 0 0016 16h32a16 16 0 0016-16V111a16 16 0 00-16-16zm256 0h-32a16 16 0 00-16 16v288a16 16 0 0016 16h32a16 16 0 0016-16V111a16 16 0 00-16-16z"
        className="pause_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPause;
