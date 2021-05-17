import * as React from "react";

function SvgWindsock(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M80.05 5.46a55.93 55.93 0 10-48.18 101V496a16 16 0 0016 16h16a16 16 0 0016-16V106.42a55.87 55.87 0 00.17-101zm112 384.54l64-9V147l-64-9zM352.1 161v206l64-9V170z"
        opacity={0.4}
      />
      <path
        d="M111.89 401.1l80-11.39V138.32l-80-11.4zM498.3 182L416 170.31v187.4l82.33-11.8a15.94 15.94 0 0013.7-15.8v-132.2A16.13 16.13 0 00498.3 182zM255.93 380.61l96-13.7V161.12l-96-13.7z"
        className="windsock_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWindsock;
