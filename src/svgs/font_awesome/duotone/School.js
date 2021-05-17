import * as React from "react";

function SvgSchool(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M360 176h-24v-40a8 8 0 00-8-8h-16a8 8 0 00-8 8v64a8 8 0 008 8h48a8 8 0 008-8v-16a8 8 0 00-8-8zM0 224v272a16 16 0 0016 16h80V192H32a32 32 0 00-32 32zm608-32h-64v320h80a16 16 0 0016-16V224a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M497.75 112l-160-106.63a32 32 0 00-35.5 0L142.25 112A32 32 0 00128 138.66V512h128V368a16 16 0 0116-16h96a16 16 0 0116 16v144h128V138.67A32 32 0 00497.75 112zM320 256a80 80 0 1180-80 80 80 0 01-80 80z"
        className="school_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSchool;
