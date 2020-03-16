import * as React from "react";

function SvgHandsHelping(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M224 248V121.68a31.78 31.78 0 0115-27.1l33.5-20.9A64.48 64.48 0 01306.4 64h102.21L512 4.28A32 32 0 01555.72 16l80 138.6a32 32 0 01-11.7 43.7l-80 46.2V216a56 56 0 00-56-56H304v88a40 40 0 11-80 0z"
        opacity={0.4}
      />
      <path
        d="M4.32 357.38A31.92 31.92 0 0116 313.68l80-46.2v-47.3a63.86 63.86 0 0131.1-54.8l64.89-39V248a72 72 0 10144 0v-56H488a23.94 23.94 0 0124 24v48a23.94 23.94 0 01-24 24h-8v64a32 32 0 01-32 32h-16a64.06 64.06 0 01-64 64H231.41L128 507.68A32 32 0 0184.32 496z"
        className="hands-helping_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHandsHelping;
