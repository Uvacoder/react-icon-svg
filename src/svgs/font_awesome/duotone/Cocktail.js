import * as React from "react";

function SvgCocktail(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M208 280.27L264.28 224H151.72zM432 0c-62.6 0-115.34 40.2-135.17 96h52.53C366 67.45 396.63 48 432 48a96 96 0 010 192 95 95 0 01-39.32-8.64l-35.26 35.26A144 144 0 10432 0z"
        opacity={0.4}
      />
      <path
        d="M408.75 170.05c15.52-15.52 4.53-42.05-17.42-42.05H24.69c-22 0-32.94 26.53-17.42 42.05L176 338.78V464h-56a40 40 0 00-40 40 8 8 0 008 8h240a8 8 0 008-8 40 40 0 00-40-40h-56V338.78zM208 280.27L119.73 192h176.55z"
        className="cocktail_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCocktail;
