import * as React from "react";

function SvgWarehouse(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M504 448H136.1a8 8 0 00-8 8l-.1 48a8 8 0 008 8h368a8 8 0 008-8v-48a8 8 0 00-8-8zm0-192H136.6a8 8 0 00-8 8l-.1 48a8 8 0 008 8H504a8 8 0 008-8v-48a8 8 0 00-8-8zm0 96H136.4a8 8 0 00-8 8l-.1 48a8 8 0 008 8H504a8 8 0 008-8v-48a8 8 0 00-8-8z"
        opacity={0.4}
      />
      <path
        d="M640 161.28V504a8 8 0 01-8 8h-80a8 8 0 01-8-8V256c0-17.6-14.6-32-32.6-32H128.6c-18 0-32.6 14.4-32.6 32v248a8 8 0 01-8 8H8a8 8 0 01-8-8V161.28A48.11 48.11 0 0129.5 117l272-113.3a48.06 48.06 0 0136.9 0L610.5 117a48.11 48.11 0 0129.5 44.28z"
        className="warehouse_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWarehouse;
