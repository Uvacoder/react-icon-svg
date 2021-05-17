import * as React from "react";

function SvgUserSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M192.47 117a128 128 0 11170.32 131.66zM96 422.4V464a48 48 0 0048 48h350.2L207.37 290.3C144.17 301.3 96 356 96 422.4z"
        opacity={0.4}
      />
      <path
        d="M636.67 480.4l-19.6 25.3a16.06 16.06 0 01-22.5 2.8L6.17 53.8a15.93 15.93 0 01-2.8-22.4L23 6.2a16.06 16.06 0 0122.5-2.8l588.3 454.7a15.85 15.85 0 012.87 22.3z"
        className="user-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserSlash;
