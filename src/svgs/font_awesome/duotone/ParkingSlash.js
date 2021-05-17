import * as React from "react";

function SvgParkingSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M106.27 50.36A47.91 47.91 0 01144 32h352a48 48 0 0148 48v308.68L410 285.09A95.93 95.93 0 00336 128h-96a16.06 16.06 0 00-15.79 13.52zM336 192h-46.47l69.74 53.9A32 32 0 00336 192zm-48 176a16 16 0 01-16 16h-32a16 16 0 01-16-16v-64.86L96 204.21V432a48 48 0 0048 48h308.83L288 352.6z"
        opacity={0.4}
      />
      <path
        d="M3.37 31.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45z"
        className="parking-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgParkingSlash;
