import * as React from "react";

function SvgCodeCommit(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M628 224H509.4a189.29 189.29 0 012.6 32 200.23 200.23 0 01-2.6 32H628a12 12 0 0012-12v-40a12 12 0 00-12-12zm-616 0a12 12 0 00-12 12v40a12 12 0 0012 12h118.6a198.22 198.22 0 010-64z"
        opacity={0.4}
      />
      <path
        d="M320 96a160 160 0 10160 160A160 160 0 00320 96zm0 202a42 42 0 1142-42 42 42 0 01-42 42z"
        className="code-commit_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCodeCommit;
