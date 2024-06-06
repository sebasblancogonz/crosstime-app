import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Navigation } from "../types";

type Props = {
  navigation: Navigation;
};

const Splash = ({ navigation }: Props) => (
  <Background>
    <Logo />

    <Button mode="contained" onPress={() => navigation.navigate("Login")}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
      Sign Up
    </Button>
  </Background>
);

export default memo(Splash);
