import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { theme } from "../core/theme";

type Props = {
  children: React.ReactNode;
  solid?: boolean;
};

const Background = ({ children, solid }: Props) => {
  return solid ? (
    <View style={styles.backgroundSolid}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  ) : (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      imageStyle={{ opacity: 0.2 }}
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  backgroundSolid: {
    backgroundColor: theme.colors.lightBackground,
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default memo(Background);
