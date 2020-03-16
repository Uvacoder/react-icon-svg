import * as React from "react";

function SvgNotesMedical(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M335 63h-80a64 64 0 0164 64H63a64 64 0 0164-64H47a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V111a48 48 0 00-48-48zm-47 281a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M255 63a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24zm89 201h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8z"
        className="notes-medical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgNotesMedical;
