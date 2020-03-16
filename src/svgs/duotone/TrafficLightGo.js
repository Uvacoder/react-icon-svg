import * as React from "react";

function SvgTrafficLightGo(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M240 368a48 48 0 11-48-48 48 48 0 0148 48z" opacity={0.4} />
      <path
        d="M384 192h-64v-37.88c37.2-13.22 64-48.38 64-90.12h-64V32a32 32 0 00-32-32H96a32 32 0 00-32 32v32H0c0 41.74 26.8 76.9 64 90.12V192H0c0 41.74 26.8 76.9 64 90.12V320H0c0 42.79 28.19 78.61 66.86 91v-.15a128 128 0 00250.34 0v.15c38.61-12.4 66.8-48.22 66.8-91h-64v-37.88c37.2-13.22 64-48.38 64-90.12zM192 416a48 48 0 1148-48 48 48 0 01-48 48zm0-128a48 48 0 1148-48 48 48 0 01-48 48zm0-128a48 48 0 1148-48 48 48 0 01-48 48z"
        className="traffic-light-go_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTrafficLightGo;
