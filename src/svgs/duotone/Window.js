import * as React from "react";

function SvgWindow(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M288 160a32 32 0 10-32-32 32 32 0 0032 32zm-96 0a32 32 0 10-32-32 32 32 0 0032 32zM0 224v208a48 48 0 0048 48h416a48 48 0 0048-48V224z"
        opacity={0.4}
      />
      <path
        d="M464 32H48A48 48 0 000 80v144h512V80a48 48 0 00-48-48zM96 160a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
        className="window_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWindow;
