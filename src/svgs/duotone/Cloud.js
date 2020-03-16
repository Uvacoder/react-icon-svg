import * as React from "react";

function SvgCloud(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <defs>
        <style />
      </defs>
      <path
        d="M640 352a128 128 0 01-128 128H144a144 144 0 01-47.8-279.9c-.1-2.7-.2-5.4-.2-8.1a160 160 0 01298.7-79.8A95.95 95.95 0 01544 192a96.66 96.66 0 01-6.4 34.6A128 128 0 01640 352z"
        className="cloud_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCloud;
