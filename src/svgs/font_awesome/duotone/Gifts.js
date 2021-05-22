import * as React from "react";

function SvgGifts(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M27 51.72l9.3-13A16 16 0 0158.6 35l32.1 22.8-11.5-30.58a15.89 15.89 0 019.3-20.6l15-5.6a16 16 0 0120.6 9.4l19.9 53.1 19.9-53a16 16 0 0120.6-9.4l15 5.6a16 16 0 019.4 20.6l-11.5 30.6 32-22.9a15.9 15.9 0 0122.3 3.7l9.3 13A15.9 15.9 0 01257.3 74l-30.67 22H61.37L30.7 74A16 16 0 0127 51.72zM224 256v88h184v-88h-65.88a68.15 68.15 0 01-44.4-16.33h-.05l-.06-.06-.2-.17-.2-.18A75.7 75.7 0 01284 224h-28a32 32 0 00-32 32zm232 256h152a32 32 0 0032-32v-88H456zm152-288h-28a75.7 75.7 0 01-13.21 15.18l-.2.18-.2.17-.07.06h-.05A68.15 68.15 0 01521.88 256H456v88h184v-88a32 32 0 00-32-32zM224 392v88a32 32 0 0032 32h152V392z"
        opacity={0.4}
      />
      <path
        d="M240.6 194.12c1.9-30.8 17.3-61.2 44-79.8A31.71 31.71 0 00256 96H32a32 32 0 00-32 32v352a32 32 0 0032 32h168.9a63.54 63.54 0 01-8.9-32V256a64 64 0 0148.6-61.88zM456 344v-88h65.88a68.15 68.15 0 0044.4-16.33h.05l.07-.06.2-.17.2-.18a73.09 73.09 0 0025.2-55.55A74.58 74.58 0 00576.29 138a69.14 69.14 0 00-24.07-19.58A72.41 72.41 0 00519.9 111c-29.34 0-50.57 18.68-63.22 34.35C445.18 159.62 437 175.6 432 187c-5-11.46-13.23-27.52-24.75-41.76-12.62-15.6-33.82-34.2-63.15-34.2a72.41 72.41 0 00-32.32 7.35A69.14 69.14 0 00287.71 138 74.58 74.58 0 00272 183.71a73.09 73.09 0 0025.16 55.47l.2.18.2.17.06.06h.05A68.15 68.15 0 00342.12 256H408v88H224v48h184v120h48V392h184v-48zm63.9-184.65c17.7 0 24.1 14.6 24.1 24.36a24.78 24.78 0 01-8.8 19.13l-.06.06a20.35 20.35 0 01-13.26 4.77H475.4c8.8-20.43 25.8-48.32 44.5-48.32zm-177.78 48.32a20.35 20.35 0 01-13.26-4.77l-.06-.06a24.78 24.78 0 01-8.8-19.13c0-9.76 6.4-24.36 24.1-24.36 18.7 0 35.6 27.58 44.5 48.32z"
        className="gifts_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGifts;