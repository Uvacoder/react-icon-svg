import * as React from "react";

function SvgSpinner(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M108.92 355.08a48 48 0 1048 48 48 48 0 00-48-48zM256 416a48 48 0 1048 48 48 48 0 00-48-48zm208-208a48 48 0 1048 48 48 48 0 00-48-48zm-60.92 147.08a48 48 0 1048 48 48 48 0 00-48-48zm0-198.16a48 48 0 10-48-48 48 48 0 0048 48z"
        opacity={0.4}
      />
      <path
        d="M108.92 60.92a48 48 0 1048 48 48 48 0 00-48-48zM48 208a48 48 0 1048 48 48 48 0 00-48-48zM256 0a48 48 0 1048 48 48 48 0 00-48-48z"
        className="spinner_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSpinner;
