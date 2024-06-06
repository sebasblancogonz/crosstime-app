import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { useAuth } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";
import { Login, Register, ForgotPassword } from "./src/screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export const Layout = () => {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      {authState && authState.authenticated ? (
        <Tabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <>
            <Stack.Screen
              name="Register"
              options={{ title: "Sign Up" }}
              component={Register}
            />
            <Stack.Screen
              name="ForgotPassword"
              options={{ title: "Forgot Your Password?" }}
              component={ForgotPassword}
            />
            <Stack.Screen
              name="Login"
              options={{ title: "Log In" }}
              component={Login}
            />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
