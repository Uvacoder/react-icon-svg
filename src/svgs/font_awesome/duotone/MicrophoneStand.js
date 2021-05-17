import * as React from "react";

function SvgMicrophoneStand(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M6.73 423.18a26.67 26.67 0 001.08 36.57l44.44 44.44a26.67 26.67 0 0036.57 1.07L344 280 232 168zM314.34 35.72l-22.62 22.62 161.94 161.94 22.62-22.63z"
        opacity={0.4}
      />
      <path
        d="M289.54 60.53c-23.84 23.84-34.56 55.55-33 86.77L364.7 255.44c31.21 1.58 62.93-9.14 86.77-33l2.19-2.18L291.72 58.34zm188.92-27a114.49 114.49 0 00-161.93 0l-2.19 2.18 161.94 161.94 2.18-2.18a114.49 114.49 0 000-161.93zM224 512h64V329.44l-64 56.49z"
        className="microphone-stand_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMicrophoneStand;
