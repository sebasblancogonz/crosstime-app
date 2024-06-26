import Svg, { Path } from "react-native-svg";
import { theme } from "../../core/theme";

const Workout = ({ color }) => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill={color}>
    <Path d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z"></Path>
  </Svg>
);

export default Workout;
