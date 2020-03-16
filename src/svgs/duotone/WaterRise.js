import * as React from "react";

function SvgWaterRise(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M562.2 447.85c-21.51-2.4-42.11-10.5-57.91-22.9a38.79 38.79 0 00-48.21 0c-37.91 30.4-107.22 30.4-145.73-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.92 30-145.23-1.7-13.5-11.2-33.31-8.9-47.11 2-15.5 12.2-36 20.1-57.71 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.81-2.5 56.11-11.4 79.42-25.9 56.51 34.6 137 34.1 192 0 56.51 34.6 137 34.1 192 0a185 185 0 0079.12 25.8c9.1.8 16.7-6.9 16.7-16v-31.6c.16-8-5.64-15.4-13.74-16.3zm0-144c-21.51-2.4-42.11-10.5-57.91-22.9a38.79 38.79 0 00-48.21 0c-37.91 30.4-107.22 30.4-145.73-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.92 30-145.23-1.7-13.5-11.2-33.31-8.9-47.11 2-15.5 12.2-36 20.1-57.71 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.81-2.5 56.11-11.4 79.42-25.9 56.51 34.6 137 34.1 192 0 56.51 34.6 137 34.1 192 0a185 185 0 0079.12 25.8c9.1.8 16.7-6.9 16.7-16v-31.6c.16-8-5.64-15.4-13.74-16.3z"
        opacity={0.4}
      />
      <path
        d="M385.19 128H320v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80h-65.2c-14.2 0-21.4-17.31-11.2-27.31L276 5a17 17 0 0124 0l96.4 95.62c10.19 10.05 3.09 27.38-11.21 27.38z"
        className="water-rise_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWaterRise;