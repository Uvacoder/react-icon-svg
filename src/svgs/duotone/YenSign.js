import * as React from "react";

function SvgYenSign(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M32.18 332v32a12 12 0 0012 12h108v-56h-108a12 12 0 00-12 12zm308-12h-108v56h108a12 12 0 0012-12v-32a12 12 0 00-12-12zm-296-64h88.17l-29.83-56H44.19a12 12 0 00-12 12v32a12 12 0 0012 12zm296-56h-58.37L252 256h88.19a12 12 0 0012-12v-32a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M362 49.6L232.18 293.2V468a12 12 0 01-12 12h-56a12 12 0 01-12-12V293.2L22.39 49.6A12 12 0 0133 32h65.2a12 12 0 0110.8 6.7l55.4 113.2c14.5 34.7 27.1 71.9 27.1 71.9h1.3s12.6-37.2 27.1-71.9l55.4-113.2a12 12 0 0110.8-6.7h65.3A12 12 0 01362 49.6z"
        className="yen-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgYenSign;
