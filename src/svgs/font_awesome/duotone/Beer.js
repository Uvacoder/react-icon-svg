import * as React from "react";

function SvgBeer(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M368 96h-48V56a24 24 0 00-24-24H24A24 24 0 000 56v400a24 24 0 0024 24h272a24 24 0 0024-24v-42.11l80.61-36a80.08 80.08 0 0047.39-73V176a80.09 80.09 0 00-80-80zM128 368a16 16 0 01-32 0V144a16 16 0 0132 0zm96 0a16 16 0 01-32 0V144a16 16 0 0132 0zm160-63.14a16 16 0 01-9.48 14.61L320 343.8V160h48a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M208 128a16 16 0 00-16 16v224a16 16 0 0032 0V144a16 16 0 00-16-16zm-96 0a16 16 0 00-16 16v224a16 16 0 0032 0V144a16 16 0 00-16-16z"
        className="beer_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBeer;
