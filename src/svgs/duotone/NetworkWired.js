import * as React from "react";

function SvgNetworkWired(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M624 232H344v-40h-48v40H16a16 16 0 00-16 16v16a16 16 0 0016 16h104v40h48v-40h304v40h48v-40h104a16 16 0 0016-16v-16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M224 192h192a32 32 0 0032-32V32a32 32 0 00-32-32H224a32 32 0 00-32 32v128a32 32 0 0032 32zm32-128h128v64H256zm320 256H416a32 32 0 00-32 32v128a32 32 0 0032 32h160a32 32 0 0032-32V352a32 32 0 00-32-32zm-32 128h-96v-64h96zM224 320H64a32 32 0 00-32 32v128a32 32 0 0032 32h160a32 32 0 0032-32V352a32 32 0 00-32-32zm-32 128H96v-64h96z"
        className="network-wired_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgNetworkWired;
