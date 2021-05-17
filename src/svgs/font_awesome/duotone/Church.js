import * as React from "react";

function SvgChurch(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M620.61 366.54L512 320v192h112a16 16 0 0016-16V396a32 32 0 00-19.39-29.46zM0 396v100a16 16 0 0016 16h112V320L19.39 366.54A32 32 0 000 396z"
        opacity={0.4}
      />
      <path
        d="M480 274.12V512h-96v-96a64 64 0 00-128 0v96h-96V274.12a32 32 0 0115.54-27.44L288 179.2V128h-48a16 16 0 01-16-16V80a16 16 0 0116-16h48V16a16 16 0 0116-16h32a16 16 0 0116 16v48h48a16 16 0 0116 16v32a16 16 0 01-16 16h-48v51.2l112.46 67.48A32 32 0 01480 274.12z"
        className="church_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChurch;
