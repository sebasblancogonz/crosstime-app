import React from "react";
import {
  Animated,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import { theme } from "../core/theme";
import Pencil from "../components/icons/Pencil";
import BackButton from "../components/BackButton";
import { Navigation } from "../types";
import { MaterialIcons } from "@expo/vector-icons"; // You can use any icon library

interface ProfileProps {
  navigation: Navigation;
}

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 60;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const ARROW_THRESHOLD = -50; // Adjust this value to set when the arrow appears
const SPINNER_THRESHOLD = -100; // Adjust this value to set when the spinner appears

const Profile = ({ navigation }: ProfileProps) => {
  const profilePicture = require("../assets/avatar.jpeg");
  const heroImage = require("../assets/avatar.jpeg");

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [-SCROLL_DISTANCE, 0, SCROLL_DISTANCE],
    outputRange: [
      HEADER_MAX_HEIGHT + SCROLL_DISTANCE,
      HEADER_MAX_HEIGHT,
      HEADER_MIN_HEIGHT,
    ],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
    outputRange: [1, 0.8, 0],
    extrapolate: "clamp",
  });

  const arrowOpacity = scrollY.interpolate({
    inputRange: [ARROW_THRESHOLD, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const spinnerOpacity = scrollY.interpolate({
    inputRange: [SPINNER_THRESHOLD, ARROW_THRESHOLD],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const arrowRotation = scrollY.interpolate({
    inputRange: [ARROW_THRESHOLD, 0],
    outputRange: ["180deg", "0deg"],
    extrapolate: "clamp",
  });

  return (
    <Background solid={true}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.userHero,
            styles.shadowView,
            { height: headerHeight, opacity: headerOpacity },
          ]}
        >
          <BackButton goBack={() => navigation.navigate("Home")} />
          <ImageBackground
            style={styles.profilePicture}
            source={profilePicture}
          >
            <View style={styles.whiteMask} />
            <Animated.View
              style={[
                styles.arrowContainer,
                {
                  opacity: arrowOpacity,
                  transform: [{ rotate: arrowRotation }],
                },
              ]}
            >
              <MaterialIcons name="arrow-downward" size={24} color={"white"} />
            </Animated.View>
            <Animated.View
              style={[styles.spinnerContainer, { opacity: spinnerOpacity }]}
            >
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </Animated.View>
            <View style={styles.userOverview}>
              <ImageBackground source={heroImage} style={styles.avatarImage} />
              <Text style={styles.username}>User profile</Text>
              <View style={styles.editButton}>
                <Pencil color="white" height={18} witdh={18} />
              </View>
            </View>
          </ImageBackground>
        </Animated.View>

        <Animated.ScrollView
          contentContainerStyle={styles.scrollViewContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <View style={{ paddingTop: HEADER_MIN_HEIGHT }}>
            <Text style={styles.contentText}>
              Scroll down to see the header shrink
            </Text>
            {/* More content to make scrolling possible */}
            {Array.from({ length: 30 }).map((_, index) => (
              <Text key={index} style={styles.contentText}>
                Scrollable content {index + 1}
              </Text>
            ))}
          </View>
        </Animated.ScrollView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
    flex: 1,
    width: "100%",
  },
  userHero: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  userOverview: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    width: 140,
    height: 190,
  },
  avatarImage: {
    marginTop: 27,
    marginBottom: 18,
    height: 103,
    width: 103,
    borderRadius: 20,
    overflow: "hidden",
  },
  username: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  shadowView: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    top: -65,
    backgroundColor: "#EE8924",
    alignItems: "center",
    justifyContent: "center",
    right: -40,
  },
  whiteMask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    opacity: 0.6,
  },
  darkMask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#272727",
    opacity: 0.6,
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    paddingTop: HEADER_MAX_HEIGHT,
  },
  contentText: {
    fontSize: 18,
    paddingVertical: 10,
  },
  arrowContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
  spinnerContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
});

export default Profile;
