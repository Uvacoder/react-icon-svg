import * as React from "react";

function SvgVoicemail(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M496 224a48 48 0 1048 48 48.05 48.05 0 00-48-48zm-352 0a48 48 0 1048 48 48.05 48.05 0 00-48-48z"
        opacity={0.4}
      />
      <path
        d="M496 128a144 144 0 00-119.74 224H263.74A144 144 0 10144 416h352a144 144 0 000-288zM64 272a80 80 0 1180 80 80 80 0 01-80-80zm432 80a80 80 0 1180-80 80 80 0 01-80 80z"
        className="voicemail_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVoicemail;
