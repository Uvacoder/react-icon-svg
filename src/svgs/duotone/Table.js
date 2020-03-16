import * as React from "react";

function SvgTable(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M288 160v96h160v-96zm0 256h160v-96H288zM64 256h160v-96H64zm0 160h160v-96H64z"
        opacity={0.4}
      />
      <path
        d="M464 32H48A48 48 0 000 80v352a48 48 0 0048 48h416a48 48 0 0048-48V80a48 48 0 00-48-48zM224 416H64v-96h160zm0-160H64v-96h160zm224 160H288v-96h160zm0-160H288v-96h160z"
        className="table_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTable;
