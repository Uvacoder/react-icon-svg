import * as React from "react";

function SvgSuitcaseRolling(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M144 48h96v112h48V48a48 48 0 00-48-48h-96a48 48 0 00-48 48v112h48zM64 496a16 16 0 0016 16h32a16 16 0 0016-16v-16H64zm192 0a16 16 0 0016 16h32a16 16 0 0016-16v-16h-64zm56-240H72a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm0 96H72a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8z"
        opacity={0.4}
      />
      <path
        d="M336 160H48a48 48 0 00-48 48v224a48 48 0 0048 48h288a48 48 0 0048-48V208a48 48 0 00-48-48zm-16 216a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h240a8 8 0 018 8zm0-96a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h240a8 8 0 018 8z"
        className="suitcase-rolling_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSuitcaseRolling;
