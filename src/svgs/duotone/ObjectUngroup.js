import * as React from "react";

function SvgObjectUngroup(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M544 224v192h26a6 6 0 016 6v52a6 6 0 01-6 6h-52a6 6 0 01-6-6v-26H224v26a6 6 0 01-6 6h-52a6 6 0 01-6-6v-52a6 6 0 016-6h26v-96h32v96h288V224H384v-32h128v-26a6 6 0 016-6h52a6 6 0 016 6v52a6 6 0 01-6 6z"
        opacity={0.4}
      />
      <path
        d="M384 96v192h26a6 6 0 016 6v52a6 6 0 01-6 6h-52a6 6 0 01-6-6v-26H64v26a6 6 0 01-6 6H6a6 6 0 01-6-6v-52a6 6 0 016-6h26V96H6a6 6 0 01-6-6V38a6 6 0 016-6h52a6 6 0 016 6v26h288V38a6 6 0 016-6h52a6 6 0 016 6v52a6 6 0 01-6 6z"
        className="object-ungroup_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgObjectUngroup;
