import * as React from "react";

function SvgMicrophone(props) {
  return (
    <svg viewBox="0 0 352 512" {...props}>
      <path
        d="M80 256V96a96 96 0 01192 0v160a96 96 0 01-192 0z"
        opacity={0.4}
      />
      <path
        d="M352 256c0 88.9-66.29 162.47-152 174.23V464h56a16 16 0 0116 16v16a16 16 0 01-16 16H96a16 16 0 01-16-16v-16a16 16 0 0116-16h56v-34.15C64 417.71 0 337.8 0 248.16V208a16 16 0 0116-16h16a16 16 0 0116 16v42.3c0 66.81 48.71 126.59 115.21 133.08A128.15 128.15 0 00304 256v-48a16 16 0 0116-16h16a16 16 0 0116 16z"
        className="microphone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMicrophone;
