import * as React from "react";

function SvgAlignSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M528 352h-31.46l-82.81-64H528a16 16 0 0116 16v32a16 16 0 01-16 16zM96 304v32a16 16 0 0016 16h175.21l-82.8-64H112a16 16 0 00-16 16zM528 96a16 16 0 0016-16V48a16 16 0 00-16-16H112a15.82 15.82 0 00-15 11.18L165.31 96zM112 416a16 16 0 00-16 16v32a16 16 0 0016 16h340.83L370 416zm416-256H248.12l82.81 64H528a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M633.82 458.1L45.46 3.38A16 16 0 0023 6.19L3.37 31.46a16 16 0 002.81 22.45l588.36 454.72a16 16 0 0022.46-2.81l19.64-25.27a16 16 0 00-2.82-22.45z"
        className="align-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAlignSlash;
