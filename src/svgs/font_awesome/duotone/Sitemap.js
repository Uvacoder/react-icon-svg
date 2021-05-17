import * as React from "react";

function SvgSitemap(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M104 320H56v-57.59A38.45 38.45 0 0194.41 224H296v-64h48v64h201.59A38.46 38.46 0 01584 262.41V320h-48v-48H344v48h-48v-48H104z"
        opacity={0.4}
      />
      <path
        d="M128 352H32a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32zM384 0H256a32 32 0 00-32 32v96a32 32 0 0032 32h128a32 32 0 0032-32V32a32 32 0 00-32-32zm224 352h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32zm-240 0h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32z"
        className="sitemap_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSitemap;
