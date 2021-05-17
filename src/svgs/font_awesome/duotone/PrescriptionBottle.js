import * as React from "react";

function SvgPrescriptionBottle(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M32 128h320v352a32.09 32.09 0 01-32 32H64a32.09 32.09 0 01-32-32v-64h120a8 8 0 008-8v-16a8 8 0 00-8-8H32v-64h120a8 8 0 008-8v-16a8 8 0 00-8-8H32v-64h120a8 8 0 008-8v-16a8 8 0 00-8-8H32z"
        opacity={0.4}
      />
      <path
        d="M360 0H24A24.07 24.07 0 000 24v48a24.07 24.07 0 0024 24h336a24.07 24.07 0 0024-24V24a24.07 24.07 0 00-24-24zM152 384H32v32h120a8 8 0 008-8v-16a8 8 0 00-8-8zm0-192H32v32h120a8 8 0 008-8v-16a8 8 0 00-8-8zm0 96H32v32h120a8 8 0 008-8v-16a8 8 0 00-8-8z"
        className="prescription-bottle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPrescriptionBottle;
