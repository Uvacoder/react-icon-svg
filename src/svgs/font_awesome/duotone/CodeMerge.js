import * as React from "react";

function SvgCodeMerge(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M227.06 293.9A199.9 199.9 0 01104 225.83v129.84a80.31 80.31 0 00-48 0V156.33a80.24 80.24 0 0058.73-4.24 152.51 152.51 0 00113.78 93.41 80 80 0 00-1.45 48.4z"
        opacity={0.4}
      />
      <path
        d="M80 0a80 80 0 1080 80A80 80 0 0080 0zm0 96a16 16 0 1116-16 16 16 0 01-16 16zm0 256a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16zm224-256a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16z"
        className="code-merge_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCodeMerge;
