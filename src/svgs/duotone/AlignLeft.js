import * as React from "react";

function SvgAlignLeft(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96z"
        opacity={0.4}
      />
      <path
        d="M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="align-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAlignLeft;
