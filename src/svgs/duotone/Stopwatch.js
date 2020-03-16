import * as React from "react";

function SvgStopwatch(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M224 96C109.12 96 16 189.12 16 304s93.12 208 208 208 208-93.12 208-208S338.88 96 224 96zm32 240a16 16 0 01-16 16h-32a16 16 0 01-16-16V208.5a16 16 0 0116-16h32a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M240 192.5h-32a16 16 0 00-16 16V336a16 16 0 0016 16h32a16 16 0 0016-16V208.5a16 16 0 00-16-16zm188.53-48.57l-28.3-28.3a12 12 0 00-17 0l-27.45 27.45a209.14 209.14 0 0142.8 47.8l.55-.55 29.4-29.4a12 12 0 000-17zM280 0H168a16 16 0 00-16 16v32a16 16 0 0016 16h24v34.45a210 210 0 0164 0V64h24a16 16 0 0016-16V16a16 16 0 00-16-16z"
        className="stopwatch_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStopwatch;
