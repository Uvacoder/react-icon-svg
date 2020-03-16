import * as React from "react";

function SvgMapSigns(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M224 496a16 16 0 0016 16h32a15.88 15.88 0 005.71-1.07l.52-.19.1-.05a16.08 16.08 0 005-3.38A15.91 15.91 0 00288 496V384h-64zM272 0h-32a16 16 0 00-16 16v16h64V16a16 16 0 00-16-16zm-48 224h64v-32h-64z"
        opacity={0.4}
      />
      <path
        d="M456 224H70.63A32 32 0 0048 233.37L4.69 276.69a16 16 0 000 22.63L48 342.63A32 32 0 0070.63 352H456a24 24 0 0024-24v-80a24 24 0 00-24-24zm51.31-139.31L464 41.37A32 32 0 00441.37 32H56a24 24 0 00-24 24v80a24 24 0 0024 24h385.37a32 32 0 0022.63-9.37l43.31-43.31a16 16 0 000-22.63z"
        className="map-signs_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapSigns;
