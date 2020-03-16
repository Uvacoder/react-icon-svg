import * as React from "react";

function SvgMonitorHeartRate(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M512 64v384H64V288h118.11l27.58 55.16a16 16 0 0028.62 0L288 243.78 310.11 288H400a16 16 0 000-32h-70.11l-27.58-55.16a16 16 0 00-28.62 0L224 300.22l-19.9-39.8A8 8 0 00197 256H64V64z"
        opacity={0.4}
      />
      <path
        d="M528 0H48A48 48 0 000 48v416a48 48 0 0048 48h480a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 448H64V64h448z"
        className="monitor-heart-rate_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMonitorHeartRate;
