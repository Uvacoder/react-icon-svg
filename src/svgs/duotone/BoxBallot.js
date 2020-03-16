import * as React from "react";

function SvgBoxBallot(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M144 192l-.5-175.8A16.2 16.2 0 01159.7 0l255.8.6a16 16 0 0116 16L432 192z"
        opacity={0.4}
      />
      <path
        d="M0 320v160a32 32 0 0032 32h512a32 32 0 0032-32V320zm574.7-32a8.34 8.34 0 00.8-1.2L520 148.2a32.07 32.07 0 00-29.7-20.1h-26.6l.2 64 16 32H95.5l16-32h.5l-.2-64H85.7A32.07 32.07 0 0056 148.2L.4 286.8c.3.5.5.7.8 1.2z"
        className="box-ballot_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxBallot;
