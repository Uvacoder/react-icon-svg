import * as React from "react";

function SvgPianoKeyboard(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M576 224v192a32 32 0 01-32 32H32a32 32 0 01-32-32V224h48v176h480V224z"
        opacity={0.4}
      />
      <path
        d="M576 96v128H464v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80h-80v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80h-80v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80H0V96a32 32 0 0132-32h512a32 32 0 0132 32z"
        className="piano-keyboard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPianoKeyboard;
