import * as React from "react";

function SvgBreadSlice(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M288 0C108 0 0 93.4 0 169.14 0 199.44 24.24 224 64 224v256c0 17.67 16.12 32 36 32h376c19.88 0 36-14.33 36-32V224c39.76 0 64-24.56 64-54.86C576 93.4 468 0 288 0zM152 448a24 24 0 1124-24 24 24 0 01-24 24zm0-96a24 24 0 1124-24 24 24 0 01-24 24zm96 96a24 24 0 1124-24 24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M152 400a24 24 0 1024 24 24 24 0 00-24-24zm0-96a24 24 0 1024 24 24 24 0 00-24-24zm96 96a24 24 0 1024 24 24 24 0 00-24-24z"
        className="bread-slice_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBreadSlice;
