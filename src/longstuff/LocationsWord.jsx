import React from "react";

const LocationsWord = () => {
  return (
    <svg
      height="51"
      viewBox="0 0 439 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="locationword"
      className="op0"
    >
      <rect width="439" height="51" fill="url(#pattern012)" />
      <defs>
        <pattern
          id="pattern012"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_26_28"
            transform="scale(0.0022779 0.0196078)"
          />
        </pattern>
        <image
          id="image0_26_28"
          width="439"
          height="51"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LocationsWord;