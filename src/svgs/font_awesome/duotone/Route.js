import * as React from "react";

function SvgRoute(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 416a96.15 96.15 0 01-96 96H138.2a690.4 690.4 0 0047.3-64H416a32 32 0 000-64h-96a96 96 0 010-192h45.24A799.82 799.82 0 00416 256h-96a32 32 0 000 64h96a96.15 96.15 0 0196 96z"
        opacity={0.4}
      />
      <path
        d="M96 256a96 96 0 00-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32zM416 0a96 96 0 00-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z"
        className="route_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRoute;
