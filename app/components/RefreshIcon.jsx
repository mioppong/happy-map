import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Icon({ size = 40 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#prefix__clip0_9_3)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.65 2.35A7.95 7.95 0 007.17.04C3.5.41.48 3.39.07 7.06-.48 11.91 3.27 16 8 16a7.98 7.98 0 007.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 01-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 018 2c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H15c.55 0 1-.45 1-1V2.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
          fill="#FF857D"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_9_3">
          <Path d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
