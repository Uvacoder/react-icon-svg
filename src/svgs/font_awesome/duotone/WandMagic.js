import * as React from "react";

function SvgWandMagic(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M416 176v-28l-39.65 44H400a16 16 0 0016-16zm-288 96v36.87L186.6 256H144a16 16 0 00-16 16zM106.66 53.33L80 0 53.34 53.34 0 80l53.34 26.67L80 160l26.66-53.33L160 80zm352 288L432 288l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368zM224 0l-16 32-32 16 32 16 16 32 16-32 32-16-32-16z"
        opacity={0.4}
      />
      <path
        d="M507.87 46.18L97.16 501.44A32 32 0 0152 503.71q-.6-.54-1.17-1.11L9.37 461.17a32 32 0 010-45.25c.38-.38.77-.75 1.16-1.11L465.79 4.11a16 16 0 0122 .55l19.48 19.47a16 16 0 01.6 22.05z"
        className="wand-magic_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWandMagic;
