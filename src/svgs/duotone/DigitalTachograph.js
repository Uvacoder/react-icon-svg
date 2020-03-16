import * as React from "react";

function SvgDigitalTachograph(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M296 336H72a8 8 0 00-8 8v8a8 8 0 008 8h224a8 8 0 008-8v-8a8 8 0 00-8-8zm272 0H344a8 8 0 00-8 8v8a8 8 0 008 8h224a8 8 0 008-8v-8a8 8 0 00-8-8zM288 160H80a16 16 0 00-16 16v48a16 16 0 0016 16h208a16 16 0 0016-16v-48a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M608 96H32a32 32 0 00-32 32v256a32 32 0 0032 32h576a32 32 0 0032-32V128a32 32 0 00-32-32zM304 352a8 8 0 01-8 8H72a8 8 0 01-8-8v-8a8 8 0 018-8h224a8 8 0 018 8zM72 288v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8H80a8 8 0 01-8-8zm64 0v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm64 0v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm64 0v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm40-64a16 16 0 01-16 16H80a16 16 0 01-16-16v-48a16 16 0 0116-16h208a16 16 0 0116 16zm272 128a8 8 0 01-8 8H344a8 8 0 01-8-8v-8a8 8 0 018-8h224a8 8 0 018 8z"
        className="digital-tachograph_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDigitalTachograph;
