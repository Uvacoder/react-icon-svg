import * as React from "react";

function SvgHourglassEnd(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M296 448H88c0-77.46 46.2-144 104-144s104 66.52 104 144z"
        opacity={0.4}
      />
      <path
        d="M24 448a24 24 0 00-24 24v16a24 24 0 0024 24h336a24 24 0 0024-24v-16a24 24 0 00-24-24c0-91-51-167.73-120.84-192C309 231.73 360 155 360 64a24 24 0 0024-24V24a24 24 0 00-24-24H24A24 24 0 000 24v16a24 24 0 0024 24c0 91 51 167.73 120.84 192C75 280.27 24 357 24 448zM88 64h208c0 77.46-46.2 144-104 144S88 141.48 88 64zm104 240c57.79 0 104 66.52 104 144H88c0-77.46 46.2-144 104-144z"
        className="hourglass-end_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHourglassEnd;
