import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Dashboard, Exercises } from "../screens";
import Workout from "../components/icons/Workout";
import HomeIcon from "../components/icons/Home";
import SearchIcon from "../components/icons/Search";
import CalendarIcon from "../components/icons/Calendar";
import AccountIcon from "../components/icons/Account";
import { theme } from "../core/theme";
import Scheduler from "../screens/Scheduler";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIcon: ({ color, focused }) => (
            <SearchIcon
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIcon: ({ color, focused }) => (
            <Workout
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sessions"
        component={Scheduler}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIcon: ({ color, focused }) => (
            <CalendarIcon
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Exercises}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIcon: ({ color, focused }) => (
            <AccountIcon
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
