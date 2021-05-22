import * as React from "react";

function SvgOutdent(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 000 22.62z"
        className="outdent_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgOutdent;