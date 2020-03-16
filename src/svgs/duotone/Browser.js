import * as React from "react";

function SvgBrowser(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M76 160h40a12 12 0 0012-12v-40a12 12 0 00-12-12H76a12 12 0 00-12 12v40a12 12 0 0012 12zM0 224v208a48 48 0 0048 48h416a48 48 0 0048-48V224z"
        opacity={0.4}
      />
      <path
        d="M464 32H48A48 48 0 000 80v144h512V80a48 48 0 00-48-48zM128 148a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm320 0a12 12 0 01-12 12H188a12 12 0 01-12-12v-40a12 12 0 0112-12h248a12 12 0 0112 12z"
        className="browser_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBrowser;
