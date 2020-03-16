import * as React from "react";

function SvgBolt(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M224 24.19a23.89 23.89 0 01-.79 6L180.61 160l-37.9 128H24a24 24 0 01-24-24 24.45 24.45 0 01.21-3.2l32-240A24 24 0 0156 0h144a24.09 24.09 0 0124 24.19z"
        opacity={0.4}
      />
      <path
        d="M319.93 184.07a23.93 23.93 0 01-3.22 11.93l-176 304a24 24 0 01-44.1-17.5l46.1-194.5 37.9-128H296a24 24 0 0123.93 24.07z"
        className="bolt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBolt;
