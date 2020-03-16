import * as React from "react";

function SvgMicrochip(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M24 190v6H6a6 6 0 00-6 6v12a6 6 0 006 6h18v6a6 6 0 006 6h42v-48H30a6 6 0 00-6 6zm0-96v6H6a6 6 0 00-6 6v12a6 6 0 006 6h18v6a6 6 0 006 6h42V88H30a6 6 0 00-6 6zm482 6h-18v-6a6 6 0 00-6-6h-42v48h42a6 6 0 006-6v-6h18a6 6 0 006-6v-12a6 6 0 00-6-6zm0 192h-18v-6a6 6 0 00-6-6h-42v48h42a6 6 0 006-6v-6h18a6 6 0 006-6v-12a6 6 0 00-6-6zm0-96h-18v-6a6 6 0 00-6-6h-42v48h42a6 6 0 006-6v-6h18a6 6 0 006-6v-12a6 6 0 00-6-6zm0 192h-18v-6a6 6 0 00-6-6h-42v48h42a6 6 0 006-6v-6h18a6 6 0 006-6v-12a6 6 0 00-6-6zm-482-6v6H6a6 6 0 00-6 6v12a6 6 0 006 6h18v6a6 6 0 006 6h42v-48H30a6 6 0 00-6 6zm0-96v6H6a6 6 0 00-6 6v12a6 6 0 006 6h18v6a6 6 0 006 6h42v-48H30a6 6 0 00-6 6z"
        opacity={0.4}
      />
      <path
        d="M144 512a48 48 0 01-48-48V48a48 48 0 0148-48h224a48 48 0 0148 48v416a48 48 0 01-48 48z"
        className="microchip_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMicrochip;
