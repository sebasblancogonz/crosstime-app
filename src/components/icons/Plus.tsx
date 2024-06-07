import Svg, { Path } from "react-native-svg";

const PlusIcon = ({ color }) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    height={24}
    width={24}
    stroke={color}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export default PlusIcon;
