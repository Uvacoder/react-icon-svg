import * as React from "react";

function SvgStarOfLife(props) {
  return (
    <svg viewBox="0 0 480 512" {...props}>
      <path
        d="M2.14 155.72l32-55.43A16 16 0 0156 94.43l184 106.43L424 94.42a16 16 0 0121.86 5.84l32 55.43a16 16 0 01-5.86 21.87L288 284.19V496a16 16 0 01-16 16h-64a16 16 0 01-16-16V284.18L8 177.57a16 16 0 01-5.86-21.85z"
        opacity={0.4}
      />
      <path
        d="M477.87 356.55l-32 55.43a16 16 0 01-21.87 5.86L240 311.41 56 417.85A16 16 0 0134.15 412l-32-55.43A16 16 0 018 334.7l184-106.62V16.27a16 16 0 0116-16h64a16 16 0 0116 16v211.82L472 334.7a16 16 0 015.87 21.85z"
        className="star-of-life_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStarOfLife;
