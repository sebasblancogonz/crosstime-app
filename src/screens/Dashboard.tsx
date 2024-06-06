import React, { memo, useState, useEffect } from "react";
import { Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { useAuth } from "../context/AuthContext";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { onLogout } = useAuth();

  const _onLogoutPressed = async () => {
    await onLogout();

    navigation.navigate("Home");
  };

  return (
    <Background solid={true}>
      <Logo />
      <Header>Let's start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={_onLogoutPressed}>
        Logout
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
