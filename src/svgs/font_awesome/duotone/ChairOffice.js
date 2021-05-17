import * as React from "react";

function SvgChairOffice(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M352 256H96V64a64 64 0 0164-64h128a64 64 0 0164 64z"
        opacity={0.4}
      />
      <path
        d="M64 224v-64a32 32 0 00-64 0v64a32 32 0 0064 0zm352-96a32 32 0 00-32 32v64a32 32 0 0064 0v-64a32 32 0 00-32-32zm-12.33 181.88A32 32 0 00373.31 288H74.69a32 32 0 00-30.36 21.88l-10.67 32A32 32 0 0064 384h128v67.36c-28.27 6-51 19.69-61.85 37.21-6.41 10.34 2.41 23.43 15 23.43h157.68c12.61 0 21.44-13.09 15-23.43-10.83-17.52-33.57-31.2-61.83-37.21V384h128a32 32 0 0030.36-42.12z"
        className="chair-office_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChairOffice;
