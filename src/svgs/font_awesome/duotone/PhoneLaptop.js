import * as React from "react";

function SvgPhoneLaptop(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M128 64h320v32h64V48a48.1 48.1 0 00-47.91-48H111.91A48.1 48.1 0 0064 48v240H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H128z"
        opacity={0.4}
      />
      <path
        d="M604 128H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-28 320H448V192h128z"
        className="phone-laptop_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPhoneLaptop;
