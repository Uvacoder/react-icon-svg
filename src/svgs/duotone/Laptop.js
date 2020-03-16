import * as React from "react";

function SvgLaptop(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M528 0H112a48.14 48.14 0 00-48 48v336h512V48a48.14 48.14 0 00-48-48zm-16 320H128V64h384z"
        opacity={0.4}
      />
      <path
        d="M512 64H128v256h384zm112 352H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 00-16 16v16a64.19 64.19 0 0064 64h512a64.19 64.19 0 0064-64v-16a16 16 0 00-16-16z"
        className="laptop_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLaptop;
