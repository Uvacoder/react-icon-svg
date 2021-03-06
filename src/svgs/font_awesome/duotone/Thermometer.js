import * as React from "react";

function SvgThermometer(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M484.05 162.6l-254.2 253.3H130l-89 89A24 24 0 017.05 471l89-89V281.1l45.34-45.64 50.06 50.14a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3l-50.13-50.21 45.13-45.42 50.3 50.23a8 8 0 0011.3 0L282 206.3a8 8 0 000-11.3l-50.3-50.37 45.1-45.4 50.4 50.47a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3l-50.5-50.51 45.7-46c36.4-36.5 94.4-40.9 131.9-10.2C526.25 61.1 519 127.7 484.05 162.6z"
        opacity={0.4}
      />
      <path
        d="M214.05 263a8 8 0 010 11.3l-11.3 11.3a8 8 0 01-11.3 0l-50.06-50.14 22.53-22.67zm62.7-163.77l50.4 50.47a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3l-50.5-50.51zm-6.1 118.37L282 206.3a8 8 0 000-11.3l-50.3-50.37-22.6 22.74 50.3 50.23a8 8 0 0011.25 0z"
        className="thermometer_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgThermometer;
