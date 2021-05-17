import * as React from "react";

function SvgSearchLocation(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M208 80a128 128 0 11-90.51 37.49A127.15 127.15 0 01208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
        opacity={0.4}
      />
      <path
        d="M208 112a73.83 73.83 0 00-73.84 73.83c0 33 48.26 93 66.75 114.86a9.22 9.22 0 0013 1.16 8.55 8.55 0 001.17-1.16c18.49-21.81 66.75-81.89 66.75-114.86A73.83 73.83 0 00208 112zm0 96a24 24 0 1124-24 24 24 0 01-24 24zm297 234.7L405.3 343a24 24 0 00-17-7H372l-36 36v16.3a24 24 0 007 17l99.7 99.7a23.9 23.9 0 0033.9 0l28.3-28.3a24.11 24.11 0 00.1-34z"
        className="search-location_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSearchLocation;
