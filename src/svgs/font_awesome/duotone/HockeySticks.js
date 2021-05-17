import * as React from "react";

function SvgHockeySticks(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M233.65 8.93v-.08a16 16 0 00-21.49-7.16l-57.26 28.6a16.11 16.11 0 00-7.21 21.5l118.66 237L320 181.47zM624 352h-48v160h48a16 16 0 0016-16V368a16 16 0 00-16-16zm-223-8.8l-27.26-54.46L320 395.94l40.39 80.66A64.52 64.52 0 00418 512h126V352H416c-6.06 0-12.35-3.39-15.06-8.8zM64 512h32V352H64z"
        opacity={0.4}
      />
      <path
        d="M485.13 30.29l-57.26-28.6a16 16 0 00-21.49 7.16v.08L239.06 343.2c-2.71 5.41-9 8.82-15.06 8.8H96v160h126a64.52 64.52 0 0057.61-35.4L492.34 51.79a16.11 16.11 0 00-7.21-21.5zM0 368v128a16 16 0 0016 16h48V352H16a16 16 0 00-16 16zm544-16v160h32V352z"
        className="hockey-sticks_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHockeySticks;
