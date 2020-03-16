import * as React from "react";

function SvgCameraPolaroid(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M570.63 343.94L512 256V80a48 48 0 00-48-48H112a48 48 0 00-48 48v176L5.38 343.94A31.8 31.8 0 001.57 352h572.86a32.12 32.12 0 00-3.8-8.06zM288 256a64 64 0 1164-64 64.1 64.1 0 01-64 64zm152-112a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M574.43 352H1.57A31.76 31.76 0 000 361.69V448a32 32 0 0032 32h512a32 32 0 0032-32v-86.31a31.76 31.76 0 00-1.57-9.69zM480 408a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h368a8 8 0 018 8zM288 256a64 64 0 10-64-64 64.1 64.1 0 0064 64z"
        className="camera-polaroid_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCameraPolaroid;
