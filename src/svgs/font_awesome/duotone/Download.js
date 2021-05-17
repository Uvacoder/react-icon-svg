import * as React from "react";

function SvgDownload(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M320 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3a19.37 19.37 0 01-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24a23.94 23.94 0 0124-24h80a23.94 23.94 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M488 352H341.3l-49 49a51.24 51.24 0 01-72.6 0l-49-49H24a23.94 23.94 0 00-24 24v112a23.94 23.94 0 0024 24h464a23.94 23.94 0 0024-24V376a23.94 23.94 0 00-24-24zm-120 96a16 16 0 1116-16 16 16 0 01-16 16zm64 0a16 16 0 1116-16 16 16 0 01-16 16z"
        className="download_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDownload;
