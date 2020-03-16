import * as React from "react";

function SvgCommentsAlt(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M352 287.9H162.3L79.5 350a9.7 9.7 0 01-15.5-7.8V288a64.06 64.06 0 01-64-64V64A64.06 64.06 0 0164 0h288a64.06 64.06 0 0164 64v160a63.91 63.91 0 01-64 63.9z"
        opacity={0.4}
      />
      <path
        d="M576 224v160a64.06 64.06 0 01-64 64h-32v54.3a9.7 9.7 0 01-15.5 7.8L381.7 448H256a64.06 64.06 0 01-64-64v-64h160a96.15 96.15 0 0096-96v-64h64a64.06 64.06 0 0164 64z"
        className="comments-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentsAlt;
