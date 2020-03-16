import * as React from "react";

function SvgPrescription(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M379.32 274l-78.06 78L256 397.29l-78 78.07a16 16 0 01-22.63 0l-22.63-22.63a16 16 0 010-22.63l201.32-201.38a16 16 0 0122.63 0l22.63 22.63a16 16 0 010 22.65z"
        opacity={0.4}
      />
      <path
        d="M379.32 430.09l-78.06-78-45.26 45.2 78.06 78.06a16 16 0 0022.63 0l22.63-22.63a16 16 0 000-22.63zM172 222.78c47.27-6 84-45.89 84-94.78a96 96 0 00-96-96H16A16 16 0 000 48v256a16 16 0 0016 16h32a16 16 0 0016-16v-80h18.75l128 128L256 306.78zM64 160V96h96a32 32 0 110 64z"
        className="prescription_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPrescription;
