import * as React from "react";

function SvgProcedures(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M160 224a64 64 0 1064 64 64 64 0 00-64-64zm368 0H272a16 16 0 00-16 16v144h384v-48.09A111.93 111.93 0 00528 224z"
        opacity={0.4}
      />
      <path
        d="M136 96h126.1l27.6 55.2a16 16 0 0028.6 0L368 51.83 390.1 96H512a16 16 0 000-32H409.9L382.3 8.83a16 16 0 00-28.6 0l-49.7 99.4-19.9-39.8a8 8 0 00-7.2-4.4H136a8 8 0 00-8 8V88a8 8 0 008 8zm120 288H64V144a16 16 0 00-16-16H16a16 16 0 00-16 16v352a16 16 0 0016 16h32a16 16 0 0016-16v-48h512v48a16 16 0 0016 16h32a16 16 0 0016-16V384z"
        className="procedures_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgProcedures;
