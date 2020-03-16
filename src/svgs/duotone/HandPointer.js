import * as React from "react";

function SvgHandPointer(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M408 200a40 40 0 00-40 40h-8v-24a40 40 0 00-80 0v24h-8v-40a40 40 0 00-80 0v40h-8V40a40 40 0 00-80 0v276l-31.65-43.53a40 40 0 00-64.7 47.06l128 176A40 40 0 00168 512h208a40 40 0 0038.94-30.84l32-136A40.36 40.36 0 00448 336v-96a40 40 0 00-40-40zM224 400a16 16 0 01-32 0v-64a16 16 0 0132 0zm64 0a16 16 0 01-32 0v-64a16 16 0 0132 0zm64 0a16 16 0 01-32 0v-64a16 16 0 0132 0z"
        opacity={0.4}
      />
      <path
        d="M272 320a16 16 0 00-16 16v64a16 16 0 0032 0v-64a16 16 0 00-16-16zm-64 0a16 16 0 00-16 16v64a16 16 0 0032 0v-64a16 16 0 00-16-16zm128 0a16 16 0 00-16 16v64a16 16 0 0032 0v-64a16 16 0 00-16-16z"
        className="hand-pointer_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHandPointer;
