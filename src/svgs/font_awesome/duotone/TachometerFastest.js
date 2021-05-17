import * as React from "react";

function SvgTachometerFastest(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm196 343.67L350 398a66 66 0 01-6.9 18H232.88a63.33 63.33 0 01-8.88-32 63.85 63.85 0 01118.37-33.39l133.68-22.28a24 24 0 017.9 47.34z"
        opacity={0.4}
      />
      <path
        d="M484 375.67L350 398a66 66 0 01-6.9 18H232.88a63.33 63.33 0 01-8.88-32 63.85 63.85 0 01118.37-33.39l133.68-22.28a24 24 0 017.9 47.34z"
        className="tachometer-fastest_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTachometerFastest;
