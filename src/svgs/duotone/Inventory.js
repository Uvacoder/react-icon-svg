import * as React from "react";

function SvgInventory(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M624 0h-32a16 16 0 00-16 16v144H64V16A16 16 0 0048 0H16A16 16 0 000 16v496h64v-32h512v32h64V16a16 16 0 00-16-16zm-48 416H64V224h512z"
        opacity={0.4}
      />
      <path
        d="M208 256h-96a16 16 0 00-16 16v96a16 16 0 0016 16h96a16 16 0 0016-16v-96a16 16 0 00-16-16zM464 0h-96a16 16 0 00-16 16v96a16 16 0 0016 16h96a16 16 0 0016-16V16a16 16 0 00-16-16zm-96 256h-96a16 16 0 00-16 16v96a16 16 0 0016 16h96a16 16 0 0016-16v-96a16 16 0 00-16-16z"
        className="inventory_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgInventory;
