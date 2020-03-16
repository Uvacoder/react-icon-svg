import * as React from "react";

function SvgUserFriends(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M480 256a96 96 0 10-96-96 96 96 0 0096 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0048-48 111.94 111.94 0 00-112-112z"
        opacity={0.4}
      />
      <path
        d="M192 256A112 112 0 1080 144a111.94 111.94 0 00112 112zm76.8 32h-8.3a157.53 157.53 0 01-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 000 403.2V432a48 48 0 0048 48h288a48 48 0 0048-48v-28.8A115.23 115.23 0 00268.8 288z"
        className="user-friends_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserFriends;
