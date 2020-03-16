import * as React from "react";

function SvgScalpelPath(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M234.29 430.84C170.28 482.82 87 512.07 0 512l176-192h105.6v8c0 38.39-15.35 76.61-46.72 102.32z"
        opacity={0.4}
      />
      <path
        d="M482.71 11.85c-29.2-20.83-70.18-13-93.49 14.22l-201.5 235.46A16 16 0 00199.91 288h131.94a32.08 32.08 0 0024.37-11.22l139-162.44c26.38-30.8 21.24-78.41-12.51-102.49zM632 480h-80a8 8 0 00-8 8v16a8 8 0 008 8h80a8 8 0 008-8v-16a8 8 0 00-8-8zm-160 0h-80a8 8 0 00-8 8v16a8 8 0 008 8h80a8 8 0 008-8v-16a8 8 0 00-8-8zm-160 0h-80a8 8 0 00-8 8v16a8 8 0 008 8h80a8 8 0 008-8v-16a8 8 0 00-8-8z"
        className="scalpel-path_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScalpelPath;
