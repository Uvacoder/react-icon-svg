import * as React from "react";

function SvgFileSpreadsheet(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M272 128a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm56 304a16 16 0 01-16 16H72a16 16 0 01-16-16V240a16 16 0 0116-16h240a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-65 119H72a16 16 0 00-16 16v192a16 16 0 0016 16h240a16 16 0 0016-16V240a16 16 0 00-16-16zM136 416H88v-48h48zm0-80H88v-48h48zm80 80h-48v-48h48zm0-80h-48v-48h48zm80 80h-48v-48h48zm0-80h-48v-48h48z"
        className="file-spreadsheet_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFileSpreadsheet;
