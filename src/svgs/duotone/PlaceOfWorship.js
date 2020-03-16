import * as React from "react";

function SvgPlaceOfWorship(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M620.61 366.55L512 320v192h112a16 16 0 0016-16V396a32 32 0 00-19.39-29.45zM0 396v100a16 16 0 0016 16h112V320L19.39 366.55A32 32 0 000 396z"
        opacity={0.4}
      />
      <path
        d="M416 102.63v115l48.46 29.08A32 32 0 01480 274.12V512h-96v-96a64 64 0 00-128 0v96h-96V274.12a32 32 0 0115.54-27.44L224 217.6v-115a32 32 0 019.38-22.6l75.31-75.31a16 16 0 0122.62 0L406.62 80a32 32 0 019.38 22.63z"
        className="place-of-worship_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPlaceOfWorship;
