import React, { memo } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const Logo = () => (
  <Image
    source={require("../assets/crosstime-light.webp")}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: 174,
    height: 122,
    resizeMode: "contain",
    margin: "auto",
  },
});

export default memo(Logo);
