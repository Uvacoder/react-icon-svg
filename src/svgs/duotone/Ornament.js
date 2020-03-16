import * as React from "react";

function SvgOrnament(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384.1 320a190.88 190.88 0 01-11.2 64H11.2a186.89 186.89 0 01.2-128h361.2a194 194 0 0111.5 64zM136.58 96a64 64 0 11110.84 0zM176 64a16 16 0 1016-16 16 16 0 00-16 16z"
        opacity={0.4}
      />
      <path
        d="M192 512c71 0 132.9-38.7 166.1-96H25.9c33.2 57.3 95.1 96 166.1 96zm96-358.18V112a16 16 0 00-16-16H112a16 16 0 00-16 16v41.82A193.4 193.4 0 0025.9 224h332.2a193.4 193.4 0 00-70.1-70.18z"
        className="ornament_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgOrnament;
