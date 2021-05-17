import * as React from "react";

function SvgLaptopMedical(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M528 0H112a48.14 48.14 0 00-48 48v336h512V48a48.14 48.14 0 00-48-48zm-16 320H128V64h384z"
        opacity={0.4}
      />
      <path
        d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 00-16 16v16a64.19 64.19 0 0064 64h512a64.19 64.19 0 0064-64v-16a16 16 0 00-16-16zM512 64H128v256h384zm-96 152a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8z"
        className="laptop-medical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLaptopMedical;
