import * as React from "react";

function SvgSprayCan(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M288 32a32 32 0 1032 32 32 32 0 00-32-32zm96 96a32 32 0 1032 32 32 32 0 00-32-32zm96 96a32 32 0 1032 32 32 32 0 00-32-32zM384 32a32 32 0 1032 32 32 32 0 00-32-32zm96 96a32 32 0 1032 32 32 32 0 00-32-32zm0-32a32 32 0 10-32-32 32 32 0 0032 32zM160 256a80 80 0 1080 80 80 80 0 00-80-80z"
        opacity={0.4}
      />
      <path
        d="M224 160H96a96 96 0 00-96 96v224a32 32 0 0032 32h256a32 32 0 0032-32V256a96 96 0 00-96-96zm-64 256a80 80 0 1180-80 80 80 0 01-80 80zm64-384a32 32 0 00-32-32h-64a32 32 0 00-32 32v96h128z"
        className="spray-can_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSprayCan;
