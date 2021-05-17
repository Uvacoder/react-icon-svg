import * as React from "react";

function SvgDesktop(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M528 0H48A48 48 0 000 48v320a48 48 0 0048 48h480a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h448z"
        opacity={0.4}
      />
      <path
        d="M424 464h-72l-16-48h-96l-16 48h-72a24 24 0 000 48h272a24 24 0 000-48zM64 64v288h448V64z"
        className="desktop_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDesktop;
