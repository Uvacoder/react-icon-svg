import * as React from "react";

function SvgCalendarDay(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm192 176a16 16 0 01-16 16H80a16 16 0 01-16-16v-96a16 16 0 0116-16h96a16 16 0 0116 16zm112-240h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
        opacity={0.4}
      />
      <path
        d="M448 112v80H0v-80a48 48 0 0148-48h48v48a16 16 0 0016 16h32a16 16 0 0016-16V64h128v48a16 16 0 0016 16h32a16 16 0 0016-16V64h48a48 48 0 0148 48z"
        className="calendar-day_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCalendarDay;
