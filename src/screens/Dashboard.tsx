import React, { memo, useState, useEffect } from "react";
import { Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import * as SecureStore from "expo-secure-store";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const _getTokens = async () => {
      const accessToken = await SecureStore.getItemAsync("accessToken");
      const refreshToken = await SecureStore.getItemAsync("refreshToken");
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    };
    _getTokens();
  }, []);

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      {accessToken && refreshToken ? (
        <View>
          <Text>Logged in</Text>
          <Text>Access Token: {accessToken}</Text>
          <Text>Refresh Token: {refreshToken}</Text>
        </View>
      ) : (
        <Text>Not logged in</Text>
      )}
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={() => navigation.navigate("HomeScreen")}>
        Logout
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
