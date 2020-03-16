import * as React from "react";

function SvgWineBottle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M179.21 423.29L88.7 332.78l122-122 90.51 90.51z" opacity={0.4} />
      <path
        d="M507.3 72.57L439.42 4.69a16 16 0 00-22.63 0l-22.63 22.63a16 16 0 000 22.63l-76.67 76.67a127.91 127.91 0 00-140.37 27.23L18.74 312.23a64 64 0 000 90.51l90.51 90.51a64 64 0 0090.51 0l158.39-158.39a127.91 127.91 0 0027.23-140.37l76.67-76.67a16 16 0 0022.63 0l22.63-22.63a16 16 0 00-.01-22.62zM179.21 423.29L88.7 332.78l122-122 90.51 90.51z"
        className="wine-bottle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWineBottle;
