import * as React from "react";

function SvgTram(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M511.45 51.9a15.91 15.91 0 00-19.6-11.3l-480 128A16 16 0 0016 200a18.41 18.41 0 004.1-.5l480-128a16.1 16.1 0 0011.35-19.6zM80 384h96v-96H80zm256 0h96v-96h-96zm-128 0h96v-96h-96z"
        opacity={0.4}
      />
      <path
        d="M192 96a32 32 0 10-32-32 32 32 0 0032 32zm96-32a32 32 0 10-32-32 32 32 0 0032 32zm160 160H272v-91.7l-32 8.5V224H64a32 32 0 00-32 32v224a32 32 0 0032 32h384a32 32 0 0032-32V256a32 32 0 00-32-32zM176 384H80v-96h96zm128 0h-96v-96h96zm128 0h-96v-96h96z"
        className="tram_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTram;
