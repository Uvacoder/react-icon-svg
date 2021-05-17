import * as React from "react";

function SvgMugMarshmallows(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M200.9 44.79C195 37.5 186.4 32.4 176.3 32.4H64a32 32 0 00-32 32v63.89h130.1a63.41 63.41 0 0116.4-61.1zM96 224a32 32 0 0064 0v-64H96zM343.3 89.79L294.8 41.4a32 32 0 00-45.26 0L201 89.79c-10.4 10.5-11.5 26.31-4.3 38.61h151c7.2-12.3 6.1-28.11-4.4-38.61z"
        opacity={0.4}
      />
      <path
        d="M400 160H224v.27h-64v63.5a32 32 0 01-64 0v-63.5H32a32 32 0 00-32 32v191.81A95.94 95.94 0 0096 480h192a95.94 95.94 0 0096-95.88V384h16a112 112 0 000-224zm0 160h-16v-96h16a48 48 0 010 96z"
        className="mug-marshmallows_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMugMarshmallows;
