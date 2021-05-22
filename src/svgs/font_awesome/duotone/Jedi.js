import * as React from "react";

function SvgJedi(props) {
  return (
    <svg viewBox="0 0 544 512" {...props}>
      <path
        d="M210.69 285.7a8 8 0 0111.36-10.7l30.39 20.66L264 7.67a8 8 0 0116 0l11.53 287.93 30.35-20.6a8 8 0 0111.38 10.71l-20.13 33.77 42.07 8.73a8 8 0 010 15.66l-42.07 8.72 20.11 33.73a8 8 0 01-1.34 9.92 8.24 8.24 0 01-10 .8l-27.17-18.47 2.27 63.31a123.4 123.4 0 01-22.07 1.95h-6.37a123.38 123.38 0 01-21.62-1.95l2.29-63.35L222.06 397a8.34 8.34 0 01-10-.75 8 8 0 01-1.39-9.94l20.13-33.77-42.07-8.72a8 8 0 010-15.66l42.07-8.73z"
        opacity={0.4}
      />
      <path
        d="M543 224c.37 5.76 1 11.46 1 17.27a269.51 269.51 0 01-5.13 51.86L480 352h40c-42.63 94.17-137.64 160-248 160q-6.39 0-12.85-.29C155.15 506.94 65.27 442.23 24 352h39.93l-58.6-58.6A263 263 0 01.22 254a272.2 272.2 0 01.5-30h47.21L6.55 182.62a269.74 269.74 0 01108-162.07 16 16 0 019.27-3 16.35 16.35 0 0113.48 7.25 16 16 0 011.62 15.09 138.38 138.38 0 00-9.84 51.26c0 45.12 21 86.58 57.71 113.74a16.3 16.3 0 011.21 25.39c-26.55 24-41.17 56.5-41.17 91.58a123.26 123.26 0 0019.76 67.06c22.25 34.48 60.92 54.83 102 54.9h6.37c48.67.09 93.33-28.39 112.38-73.18a119.78 119.78 0 007.22-23.28A123.5 123.5 0 00356 230.3a16.33 16.33 0 011.21-25.43c36.66-27.16 57.69-68.61 57.69-113.73a138.21 138.21 0 00-9.9-51.31 16 16 0 011.61-15.09 16.35 16.35 0 0113.49-7.24 16 16 0 019.25 3 271.22 271.22 0 01107.9 162.26L496 224z"
        className="jedi_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgJedi;