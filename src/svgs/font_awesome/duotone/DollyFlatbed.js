import * as React from "react";

function SvgDollyFlatbed(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M450.74 448a48 48 0 1090.52 0zm-288 0a48 48 0 1090.52 0zM592 32H448v128l-48-32-48 32V32H208a16 16 0 00-16 16v256a16 16 0 0016 16h384a16 16 0 0016-16V48a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M448 160V32h-96v128l48-32zm176 224H128V16a16 16 0 00-16-16H16A16 16 0 000 16v32a16 16 0 0016 16h48v368a16 16 0 0016 16h544a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="dolly-flatbed_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDollyFlatbed;
