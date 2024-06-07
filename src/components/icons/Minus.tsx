import Svg, { Path } from "react-native-svg";

const MinusIcon = ({ color }) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    height={24}
    width={24}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export default MinusIcon;
