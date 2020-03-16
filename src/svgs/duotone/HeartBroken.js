import * as React from "react";

function SvgHeartBroken(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M473.68 73.78c48.71 49.79 50.8 129.08 7.3 182.08L268.8 474.53a17.82 17.82 0 01-25.19.5l-.51-.5L31 256c-43.49-53.1-41.39-132.39 7.3-182.18l2.4-2.4C87 24 159.7 19.6 211.41 57.39L240 143.87l-96 64 144 144-48-128 96-64-34.31-103.39c51.6-36.89 123.59-32.19 169.59 14.8z"
        opacity={0.4}
      />
      <path
        d="M288 352L144 208l96-64.1-28.59-86.52q16.68 14.15 32 29.81L256 100l11.67-12q16.23-16.64 34-31.6L336 159.87l-96 64z"
        className="heart-broken_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHeartBroken;
