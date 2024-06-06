import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Dashboard, Exercises } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
};

export default Tabs;
