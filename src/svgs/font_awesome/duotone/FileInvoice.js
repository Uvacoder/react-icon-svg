import * as React from "react";

function SvgFileInvoice(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M96 320h192v-64H96zm288-192H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM64 72a8 8 0 018-8h80a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8zm0 64a8 8 0 018-8h80a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8zm256 304a8 8 0 01-8 8h-80a8 8 0 01-8-8v-16a8 8 0 018-8h80a8 8 0 018 8zm0-104a16 16 0 01-16 16H80a16 16 0 01-16-16v-96a16 16 0 0116-16h224a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-73 119H80a16 16 0 00-16 16v96a16 16 0 0016 16h224a16 16 0 0016-16v-96a16 16 0 00-16-16zm-16 96H96v-64h192zm24 96h-80a8 8 0 00-8 8v16a8 8 0 008 8h80a8 8 0 008-8v-16a8 8 0 00-8-8z"
        className="file-invoice_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFileInvoice;
