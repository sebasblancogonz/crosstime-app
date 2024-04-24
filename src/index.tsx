import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from "./screens";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{ title: "Log In" }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          options={{ title: "Sign Up" }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          options={{ title: "Forgot Your Password?" }}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Dashboard"
          options={{ title: "Home" }}
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
