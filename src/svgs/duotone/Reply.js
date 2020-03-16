import * as React from "react";

function SvgReply(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 322.33c0 61.44-39.58 122.3-83.33 154.13-13.66 9.93-33.11-2.54-28.08-18.63 45.34-145-21.51-183.51-176.59-185.75v-136c160.63 1.83 288 34.02 288 186.25z"
        opacity={0.4}
      />
      <path
        d="M224 360c0 20.7-24.3 31.45-39.69 18.16l-176-152a24 24 0 010-36.32l176-152C199.72 24.55 224 35.35 224 56z"
        className="reply_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgReply;
