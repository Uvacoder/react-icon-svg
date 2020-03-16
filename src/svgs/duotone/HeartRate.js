import * as React from "react";

function SvgHeartRate(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 240v32a16 16 0 01-16 16H499.78l-55.15 110.3a32 32 0 01-59.5-5.89l-61.39-225.12-68.44 319.4A32 32 0 01225.08 512h-1.09a32 32 0 01-30.75-23.2L135.86 288H16a16 16 0 01-16-16v-32a16 16 0 0116-16h144a32 32 0 0130.77 23.2L219.56 348 288.7 25.3a32 32 0 0162.18-1.72l73.95 271.2 26.54-53.09A32 32 0 01480 224h144a16 16 0 0116 16z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgHeartRate;
