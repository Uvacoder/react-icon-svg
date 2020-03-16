import * as React from "react";

function SvgObjectGroup(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M500 96a12 12 0 0012-12V44a12 12 0 00-12-12h-40a12 12 0 00-12 12v20H64V44a12 12 0 00-12-12H12A12 12 0 000 44v40a12 12 0 0012 12h20v320H12a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-20h384v20a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12h-20V96zm-84 276a12 12 0 01-12 12H236a12 12 0 01-12-12v-84H108a12 12 0 01-12-12V140a12 12 0 0112-12h168a12 12 0 0112 12v84h116a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M288 140v136a12 12 0 01-12 12H108a12 12 0 01-12-12V140a12 12 0 0112-12h168a12 12 0 0112 12z"
        className="object-group_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgObjectGroup;
