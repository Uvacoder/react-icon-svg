import * as React from "react";

function SvgContainerStorage(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M16 96v320h608V96zm96 288H80V128h32zm112 0h-32V128h32zm112 0h-32V128h32zm112 0h-32V128h32zm112 0h-32V128h32z"
        opacity={0.4}
      />
      <path
        d="M624 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-384H16A16 16 0 000 48v32a16 16 0 0016 16h608a16 16 0 0016-16V48a16 16 0 00-16-16z"
        className="container-storage_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgContainerStorage;
