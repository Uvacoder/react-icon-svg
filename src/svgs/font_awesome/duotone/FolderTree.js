import * as React from "react";

function SvgFolderTree(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M0 416V16A16 16 0 0116 0h32a16 16 0 0116 16v80h192v64H64v224h192v64H32a32 32 0 01-32-32z"
        opacity={0.4}
      />
      <path
        d="M544 320H432l-32-32h-80a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V352a32 32 0 00-32-32zm0-288H432L400 0h-80a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V64a32 32 0 00-32-32z"
        className="folder-tree_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFolderTree;
